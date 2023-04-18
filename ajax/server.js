const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

// Middlewares que iremos utilizar
app.use(express.static('.')) //definindo que o express irá cobrir o acesso de todos as pastas e conteúdos no mesmo nivel de pastas 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// diskStorage recebe um obj para configurar as pastas dos arquivos
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar',(req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par': 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))