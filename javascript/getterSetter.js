const sequencia = {
    _valor: 1, //convencao
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

//chamando a funcao, por conta da convencao, sempre ira executar o get e o set 
//da forma que estruturamos o codigo
console.log(sequencia.valor, sequencia.valor)
//setando um valor 
sequencia.valor = 1000 
console.log(sequencia.valor, sequencia.valor)
//por conta da condicao que colocamos nao eh possivel setar um valor menor
sequencia.valor = 900 
console.log(sequencia.valor, sequencia.valor)
