const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// O body-parser é utilizado para pegar as informações da pagina
// criar um obj e enviar para o back.
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.listen(3003)