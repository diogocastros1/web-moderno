//funcao construtora
function Carro(velocidadeMaxima = 200, delta = 5){ //parametros padroes de velMax e delta
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro //objeto criado a partir da construtora
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(velocidadeAtual = 350, delta = 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())