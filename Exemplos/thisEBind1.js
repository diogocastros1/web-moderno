//objeto pessoa
const pessoa = {
    saudacao: 'Bom dia!',
    //funcao dentro do objeto
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //estamos dizendo que o this será referente ao obj pessoa
falarDePessoa()