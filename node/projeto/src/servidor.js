const porta = 3003

const express = require('express')
const app = express()
<<<<<<< HEAD
const bancoDeDados = require('./bancoDeDados')

=======
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// utilizando o use, fazemos com que toda req passe por 
// esta funcao

// o bodyParser transforma em JSON
app.use(bodyParser.urlencoded({extended: true}))

>>>>>>> f1e4b8a3c652c5b50843f32d5ceaa5f622e55697
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
<<<<<<< HEAD
        nome: req.body.name,
=======
        nome: req.body.nome,
>>>>>>> f1e4b8a3c652c5b50843f32d5ceaa5f622e55697
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

<<<<<<< HEAD
=======
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProd(req.params.id)
    res.send(produto) //JSON
})

>>>>>>> f1e4b8a3c652c5b50843f32d5ceaa5f622e55697
app.listen(porta, () => {
    console.log(`Sevidor está executando na porta ${porta}.`)
})