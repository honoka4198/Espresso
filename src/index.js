import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './views/App';
import * as serviceWorker from './views/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
