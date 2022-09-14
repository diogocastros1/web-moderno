
function Pessoa(){
    this.idade = 0

    //setInterval dispara uma funcao partindo de um intervalo determinado
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) //setamos o valor de 1000 ms para a funcao setInterval seja chamada
    
}

new Pessoa

 