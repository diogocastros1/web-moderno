function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        // uma das formas da tratativa de erro é utilizando o try catch dentro da promise
        try {
            // consol.log("-----")

            if (Math.random() < chanceErro) {
                reject('La ele!!!...')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }

    })
}

funcionarOuNao('Agora foi...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Esperado: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`)) //é uma boa prática colocar o catch no final e nao desta forma
    .then(() => console.log('Fim'))