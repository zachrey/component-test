/**
 * 实现简单的react-router
 * 使用window中的history结构和popState事件来实现
 */
import React, { Component, PropTypes } from 'react';

const instances = []; // 存储route
const register = (comp) => instances.push(comp); // 注册route实例（组件）
const unRegister = (comp) => instances.splice(instances.indexOf(comp), 1); // 注销route

// 添加路由
function historyPush(path) {
  window.history.pushState({}, null, path); // 流量器路由添加
  instances.forEach(item => item.forceUpdate()); // 更新组件
}

// 强制刷新所有组件
window.addEventListener('popState', () => {
  instances.forEach(item => item.forceUpdate()); // 更新组件
});

// 匹配当前url是否包含某个Route
function matchPath(pathname, options) {
  const { path, exact=false } = options;
  const match = new RegExp(`^${path}`).exec(pathname);
  if (!match) return null;
  const url = match[0];
  const isExact = pathname === url; // 路径是否严格匹配
  if (exact && !isExact) return null; // 如果要求严格模式，但是该路径匹配不满足严格模式
  return {
    url,
    path,
  };
}

export class Link extends Component {
  static propTypes = {
    to: PropTypes.string,
  }

  handleClick = (e) => {
    e.preventDefault();
    const { to } = this.props;
    historyPush(to);
  }

  render() {
    const { children, to } = this.props;
    return (
      <a href={to} onClick={this.handleClick}>
      { children }
      </a>
    );
  }
}

export class Route extends Component {
  static propTypes = {
    path: PropTypes.string,
    component: PropTypes.func,
    exact: PropTypes.bool,
  }

  componentWillMount = () => {
    register(this);
  }

  render() {
    const { component, path, exact } = this.props;
    const match = matchPath(window.location.pathname, { path, exact });
    if (!match) return null; // 如果不匹配返回null
    return React.createElement(component);
  }

  componentWillUnmount = () => {
    unRegister(this);
  }
  
}

export const jsHistory = {
  historyPush,
};
