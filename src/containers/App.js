import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        {this.heading}
        <main className="container pt-5">
          <h1>Testing 1 2 3</h1>
        </main>
      </div>
    );
  }
}

export default App;
