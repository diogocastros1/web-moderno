import React from "react";
// import Filho from "./Filho";
import {childrenWithProps} from "../utils/utils"


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Pegando somente uma propriedade
            <Filho nome="Pedro" sobrenome={props.sobrenome}/> 
            {/* Pegando todas propriedades
            <Filho {...props}/>
            {/* Pegando todas e sobreescrevendo somente a desejadas
            <Filho {...props} nome="Carla"/> */}

            {/* Renderiza os filhos que forem adicionados dentro do componente */}
            {/* {props.children}  */}

            {/* Renderiza os filhos mas utilizando propriedades do pai e pegando propriedades alteradas */}
            {
               childrenWithProps(props)
            }
        </ul>
    </div>