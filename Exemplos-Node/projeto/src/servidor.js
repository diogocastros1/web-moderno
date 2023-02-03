const porta = 3003

const express = require('express')

const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //Converter para JSON
})

//utilizando o use no lugar do get, atendemos qualquer requisição, mas o correto é 
//utilizar as requisções da forma correta.

app.listen(porta, () => {
    console.log(`Sevidor está executando na porta ${porta}.`)
})