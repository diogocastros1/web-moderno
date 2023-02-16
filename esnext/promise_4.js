function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
       [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// Desta forma iremos gerar varios numeros de uma vez
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 2000),
    ])
}

// Como as promises estão encadeadas, teremos os resultados somente após
// todas serem resolvidas

console.time('Tempo de exec') // podemos contar o tempo no inicio de uma execução

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('Tempo de exec') // aqui recuperamos o tempo final de execucao 
    })