import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import config from 'config';

export class App extends Component {
  render() {
    const serverUrl = `${config.baseUrl}/{z}/{x}/{y}.png`;

    return (
      <Map className="full-height" center={[0, 0]} zoom={2} maxZoom={6}>
        <TileLayer
          url={serverUrl}
          attribution='<a href="http://playatlas.com">ATLAS</a> &copy; Grapeshot Games'
        />
      </Map>
    );
  }
}

export default App;
