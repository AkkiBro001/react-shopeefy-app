import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss'
import { BrowserRouter } from "react-router-dom";
import DataContext from './DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <DataContext>
    <App />
  </DataContext>
  </BrowserRouter>
  </React.StrictMode>
);

