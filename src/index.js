import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// React Render to #root on index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
