import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store}>
    <Router />
    </Provider>
);
