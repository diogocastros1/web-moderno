Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirReuslt = function(nota){
    if(nota.entre(9,10)){
        console.log('Aprov')
    }
    else if(nota.entre(7,8.99)){
        console.log('Aprov')
    }
    else{
        console.log('NP3')
    }
}


imprimirReuslt(9)
imprimirReuslt(8)
imprimirReuslt(6)