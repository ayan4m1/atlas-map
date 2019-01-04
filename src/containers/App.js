import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

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
    const position = [40.102063, -75.171021];

    return (
      <Map className="h-100" center={position} zoom={10}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
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
