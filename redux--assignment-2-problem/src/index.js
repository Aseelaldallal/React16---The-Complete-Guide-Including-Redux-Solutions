
// App
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore } from 'redux';
import { Provider    } from 'react-redux'
// CSS
import './index.css';

const store = createStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
