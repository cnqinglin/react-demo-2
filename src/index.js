import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let div = document.getElementById('root')
ReactDOM.render(<App />, div);


serviceWorker.unregister();
