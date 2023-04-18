const webpack = require('webpack')

module.exports = {
    mode: 'development', // modo de operação de desenvolvimento, não minifica os arquivos
    // mode: 'production',
    entry: './src/principal.js', // arquivo de entrada das informações
    output: {
        filename: 'principal.js', // nome do arquivo de saida
        path: __dirname + '/public', // pasta do arquivo de saida
    },
    // 
    module: {
        rules: [{
            test: /\.css$/, // regex para ler css
            use: [
                'style-loader', // adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()....
            ]
        }]
    }
}