import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/scss/App.css';
// import './include/bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
