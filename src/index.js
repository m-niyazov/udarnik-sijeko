import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  } from 'react-router-dom';


import {store} from './store/store'
import {Provider} from 'react-redux';
//js
import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import App from './App.jsx';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
<Provider store={store}>
	<Router><App /></Router>
</Provider>
,document.getElementById('root'));

serviceWorker.unregister();
