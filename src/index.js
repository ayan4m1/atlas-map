import React from 'react';
import { render } from 'react-dom';

import './leaflet.js';
import './index.scss';
import App from './components/App';

render(<App />, document.getElementById('root'));

export default App;
