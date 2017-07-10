import React, {Component} from 'react';
import GDMap from './Map';
import {Marker} from 'react-amap';

class ShowMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      center: {
        longitude: 114.3634430000,
        latitude: 30.5369060000
      },
      markerPosition: {
        longitude: 114.3634430000,
        latitude: 30.5369060000
      }
    }
  }

  render (){
    return (
      <div style={{height: '100%', width: '100%'}}>
        <GDMap zoom={15} center={this.state.center}>
          <Marker position={this.markerPosition} />
        </GDMap>
      </div>
    );
  }
}

export default ShowMap;