import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CatalogState from './context/catalog/CatalogState';
import Main from './Main';
import './styles/Main.scss';

ReactDOM.render(
  <React.StrictMode>
    <CatalogState>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </CatalogState>
  </React.StrictMode>,
  document.getElementById('root'),
);
