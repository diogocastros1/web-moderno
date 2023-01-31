function tratarErroELancar(erro) {
    // throw new Error('......')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final') //chamada no final do processo, independente se for o try ou o catch
    }
}

const obj = { nome: "Roberto" }

imprimirNomeGritado(obj)