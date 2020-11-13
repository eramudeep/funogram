import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App_OLD from './app/App_OLD';
import App from '../src/eshop/App'
import "./i18n";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/demo/star-admin-free/react/template/demo_1/preview">
    {/* <App_OLD /> */}
    <App/>
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();