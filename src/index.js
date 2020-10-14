import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './index.css';
import {Provider} from "./Context"
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter basename="Tic">
    <Provider >      
      <App/>
    </Provider>
  </BrowserRouter>
  ,
    document.getElementById('root')
 
);
