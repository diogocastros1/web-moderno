class Lancamento {
    //funcao construtora
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    //funcao construtora
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //funcao esta concatenando todos os elementos dentro do array lancamento
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    //somatorio de todos os valores lancados
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(12, 2022)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())