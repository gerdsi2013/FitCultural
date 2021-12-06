import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import GlobalStyle from './style/globalStyle'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyle/>
  </BrowserRouter>,
  document.getElementById('root')
);

