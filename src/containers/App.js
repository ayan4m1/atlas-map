import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

export class App extends Component {
  render() {
    return (
      <Map className="full-height" center={[0, 0]} zoom={2} maxZoom={6}>
        <TileLayer
          url="http://localhost:8080/base/{z}/{x}/{y}.png"
          attribution='<a href="http://playatlas.com">ATLAS</a> &copy; Grapeshot Games'
        />
      </Map>
    );
  }
}

export default App;
