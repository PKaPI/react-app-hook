import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));
//只在 https 环境中运行，防止有人劫持链接
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
