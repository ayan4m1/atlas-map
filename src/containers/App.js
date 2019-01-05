import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

export class App extends Component {
  get heading() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark p-0">
        <span className="navbar-brand col-sm-3 col-md-2 mr-0">
          <span className="d-none d-sm-none d-md-inline pl-2">Atlas Map</span>
        </span>
      </nav>
    );
  }

  get map() {
    return (
      <Map className="h-100" center={[0, 0]} zoom={1}>
        <TileLayer
          url="http://localhost:8080/base/{z}/{x}/{y}.png"
          attribution='<a href="http://playatlas.com">ATLAS</a> &copy; Grapeshot Games'
        />
      </Map>
    );
  }

  render() {
    return (
      <div className="h-100">
        {this.heading}
        <main>{this.map}</main>
      </div>
    );
  }
}

export default App;
