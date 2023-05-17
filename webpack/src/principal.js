// const Pessoa = require('./pessoa')

import Pessoa from "./pessoa";
import './assets'; //irá procurar dentro de assets um arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())