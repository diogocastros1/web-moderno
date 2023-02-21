const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*retorna o valor da variavel global pois o contexto lexico ao qual a 
funcao foi escrita, neste exemplo, busca o valor global */