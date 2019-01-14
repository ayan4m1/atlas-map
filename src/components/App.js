import L from 'leaflet';
import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import NmScale from '@marfle/react-leaflet-nmscale';

import config from 'config';

const metersPerPixel = 14000 / 256.0;
const scale = 1 / metersPerPixel;

L.CRS.Simple.transformation = new L.Transformation(scale, 0, -scale, 0);

export class App extends Component {
  render() {
    return (
      <Map
        className="full-height"
        center={[0, 0]}
        zoom={2}
        maxZoom={6}
        crs={L.CRS.Simple}
      >
        <TileLayer
          attribution='<a rel="noopener noreferrer" target="_blank" href="http://playatlas.com">ATLAS</a> &copy; Grapeshot Games</span>'
          url={`${config.tileServerUrl}/{z}/{x}/{y}.webp`}
        />
        <NmScale />
      </Map>
    );
  }
}

export default App;
