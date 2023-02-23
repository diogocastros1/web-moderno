// utilizadas para garantir que o processo sera efetuado
// seja com um retorno de sucesso ou erro 

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve aceita somente um parametro
        }, segundos * 1000)
     })
}

falarDepoisDe(3, 'Foi mesmo!!')
    .then(frase => frase.concat('?!?')) //podemos encadiar varios thens
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //tratativa do erro
