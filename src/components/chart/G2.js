import React, {Component} from 'react';
import createG2 from 'g2-react';
import { Stat } from 'g2';

const Line = createG2(chart => {
  chart.line().position('time*price').color('名称').shape('spline').size(2);
  chart.render();
});

class G2Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {"名称":"商品A","time":10,"price":40},
        {"名称":"商品A","time":20,"price":40},
        {"名称":"商品A","time":30,"price":70},
        {"名称":"商品A","time":40,"price":40},
        {"名称":"商品A","time":50,"price":52},
        {"名称":"商品A","time":60,"price":30},
        {"名称":"商品B","time":10,"price":10},
        {"名称":"商品B","time":20,"price":20},
        {"名称":"商品B","time":30,"price":70},
        {"名称":"商品B","time":40,"price":40},
        {"名称":"商品B","time":50,"price":50},
        {"名称":"商品B","time":60,"price":60}
      ],
      width: 500,
      height: 250,
      plotCfg: {
        margin: [10, 100, 50, 120],
      },
    }
  }
  render(){
    return (
      <Line
        data={this.state.data}
        width={this.state.width}
        height={this.state.height}
        plotCfg={this.state.plotCfg}
        ref="myChart"
      />
    );
  }
}

export default G2Demo;