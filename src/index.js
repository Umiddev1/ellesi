import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from './store/store'
import { CartProvider } from './store/CartContext';
import {LikeProvider} from './store/LikeContext'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider>
      <CartProvider>
        <LikeProvider>
          <App />
        </LikeProvider>
      </CartProvider>
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);