import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import "./index.css";
import App from "./App";

import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
