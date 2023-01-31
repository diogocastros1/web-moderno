const modulaA = require('../../moduloA')
console.log(modulaA.ola)


//podemos criar um modulo dentro de node modules para que este seja
//importado automaticamente, conforme exemplo abaixo.
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)