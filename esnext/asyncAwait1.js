function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...1'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...2'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...3'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}


// devemos utilizar o await em cima de uma função que retorna uma promise

async function executar() {
    //quando nao utilizamos o await a função executa tudo de uma vez

    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`AsyncAwait ${valor}`)
    await esperarPor(1500)
    console.log(`AsyncAwait ${valor+1}`)
    await esperarPor(1500)
    console.log(`AsyncAwait ${valor+2}`)
    //colocando o await a proxima funcao so sera chamada após a finalização
    //da função anterior

    return valor + 3
}

// executar()

// para recuperar o valor do return, temos que utilizar o then
// executar().then(console.log)

// a outra forma de recuperar o valor é criar uma outra funcção async
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

// neste caso temos uma funcao async chamando outra
executarDeVerdade()