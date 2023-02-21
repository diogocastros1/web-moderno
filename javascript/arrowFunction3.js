let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis =  comparaComThis.bind(obj) //com o bind referenciamos o contexto do obj e nao mais do global
comparaComThis(global) //neste caso o retorno eh falso
comparaComThis(obj) 

/*neste exemplo o this foi escrito dentro de um modulo de um arquivo, dentro de um modulo
neste caso o this referencia este modulo */
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //modulo ao qual o this esta apontando

comparaComThisArrow = comparaComThisArrow.bind(obj) //mesmo utilizando o bind, nao é possivel mudar a referencia do bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) //modulo ao qual o this esta apontando

/* O this dentro de uma funcao arrow sempre ira apontar para o modulo ao qual foi criado */
