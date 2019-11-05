import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './components/Style/reset.scss';
import './components/Style/common.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
