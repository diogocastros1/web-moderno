function Pessoa(){
    this.idade = 0

    const self = this //desta forma eliminamos o bind que esta comentado na linha 9

    //setInterval dispara uma funcao partindo de um intervalo determinado
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //setamos o valor de 1000 ms para a funcao setInterval seja chamada
    //devemos utilizar o bind para referenciar o this de pessoa
}

new Pessoa

