import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import './leaflet.js';
import './index.scss';
import App from './containers/App';

render(<App />, document.getElementById('root'));

export default App;
