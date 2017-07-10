import React, {Component} from 'react';
import {Map} from 'react-amap';

const GDMap = props => (
  <Map amapkey={'ef61508b44eb2c32a64554263167ca8a'} {...props} >{props.children}</Map>
); 

export default GDMap;