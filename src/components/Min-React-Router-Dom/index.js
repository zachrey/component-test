import React,{Component} from 'react';
import { Route, Link, jsHistory } from './mini-react-router-dom';

const Home = (props) => (
  <div>Home</div>
);

const About = (props) => (
  <div>About</div>
);

const Topics = (props) => (
  <div>Topics</div>
);

const App = (props) => (
  <div>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
      <li><Link to={'/topics'}>Topics</Link></li>
    </ul>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
);

export default App;