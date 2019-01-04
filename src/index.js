import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './containers/App';

import L from 'leaflet';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

render(<App />, document.getElementById('root'));

export default App;
