import React, { Component } from 'react';
import createG2 from 'g2-react';
import {Stat} from 'g2';

const Pie = createG2( chart => {
  chart.legend({
    position: 'bottom'
  });
  chart.coord('theta', {
    radius: 1,
    inner: 0.8
  });
  chart.col('status', {
    type: 'cat', // 声明 type 字段为分类类型
    values: ['畅通', '排队', '阻塞'], // 重新显示的值
    alias: '交通状态' // 设置属性的别名
  });
  chart.tooltip({
    title: null
  });
  chart.intervalStack().position(Stat.summary.percent('amount'))
    .color('status', ['#98D87D', '#F9BF00', '#F3857B'])
    // .label('..percent', {
    //   offset: -1
    // })
    .style({
      lineWidth: 1
    });
  chart.render();
});

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {status: '畅通', amount: 100*0.88},
        {status: '排队', amount: 100*0.10},
        {status: '阻塞', amount: 100*0.02}
      ],
      forceFit: true,
      width: 320,
      height: 320,
      plotCfg: {
        margin: 80
      },
    }
  }

  render(){
    return (
      <div>
        <Pie
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
          forceFit={this.state.forceFit} />
      </div>
    );
  }
}

export default PieChart;
