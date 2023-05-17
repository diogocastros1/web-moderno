import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João"/>
  
    <Pai nome="José" sobrenome="Silva">
      <Filho nome="Pedro"/> 
      <Filho nome="Paulo"/> 
      <Filho nome="Carla"/> 
    </Pai>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
