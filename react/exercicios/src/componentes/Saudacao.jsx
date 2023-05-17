import React, {Component} from "react";

export default class Saudacao extends Component {
    // Para conseguirmos alterar qualquer valor, precisamos utilizar state
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    // Funcao construtora
    constructor(props) {
        super(props)

        // Utilizamos o bind para garantir que o this esta referenciando este contrutor
        // desta forma escrevemos a função de forma simplificada no momento de chamá-la
        this.setTipo = this.setTipo.bind(this)
        
        // Como não fizemos a mesma coiosa para nome, temos que chama-la da forma antiga
        // this.setNome = this.setNome.bind(this)
    }

    // Função para atualizar o tipo
    setTipo(e) {
        // Contador 
        // let i = 1
        // setInterval(() => {
        //     this.setState({tipo: ++i})
        // }, 1000)

        this.setState({
            tipo: e.target.value
        })
    }
    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }
   
    render() {
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                    onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} 
                     onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}