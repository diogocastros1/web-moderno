const fs = require('fs')

// __dirname é uma constante que esta presente no node
const caminho = __dirname + '/arquivo.json'

//sincrono... não é a mais recomendada pois pode travar o event loop
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

//assincrono... melhor maneira de efetuar a leitura do arquivo
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//para arquivos que são do formato JSON não precisamos do 
//fs.readFile, mas para demais arquivos sim
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})