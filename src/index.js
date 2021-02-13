import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  // BrowserRouter imported and attached
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
