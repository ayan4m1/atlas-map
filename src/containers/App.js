import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import config from 'config';

export class App extends Component {
  render() {
    return (
      <Map className="full-height" center={[0, 0]} zoom={2} maxZoom={6}>
        <TileLayer
          attribution='<a rel="noopener noreferrer" target="_blank" href="http://playatlas.com">ATLAS</a> &copy; Grapeshot Games</span>'
          url={`${config.baseUrl}/{z}/{x}/{y}.webp`}
        />
      </Map>
    );
  }
}

export default App;
