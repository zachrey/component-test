import React, {Component} from 'react';
import {Map} from 'react-amap';

export default class GDMap extends Component {

  render(){
    return(
      <div style={{width: '100%', height: '400px'}}>
        <Map amapkey={'ef61508b44eb2c32a64554263167ca8a'}/>
      </div>
    );
  }
}