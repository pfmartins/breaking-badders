import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/utils/base.css';
import List from './components/list';

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <div className="app-header"><div className="app-header__backdrop"></div></div>
      <div className="app-body">
        <div className="app-body__title">Welcome to Breaking Bad characters</div>
        <List />
      </div>
      <div className="app-footer">
        Copyright © 2020 Breaking Badders - Todos os direitos reservados</div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);