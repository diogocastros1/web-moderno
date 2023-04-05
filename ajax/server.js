const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Middlewares que iremos utilizar
app.use(express.static('.')) //definindo que o express irá cobrir o acesso de todos as pastas e conteúdos no mesmo nivel de pastas 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))