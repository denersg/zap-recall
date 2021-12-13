import React from "react";
import TelaFlashcards from "./deck";

function TelaInicio(props){
    return(
        <div className="tela-inicio">
            <img src="./assets/logo.png"/>
            <button className="botao-prat-react" onClick={props.mudaPag} data-identifier="start-zap-recall">Praticar React<img src="./assets/next.png"/></button>
        </div>

    );
}

function Pagina(){
    const [pagAtual, setPagAtual] = React.useState('telainicio');
    function mudaPag(){
        setPagAtual('telaflashcards');
    }
    return(
        <div className="conteudo">
            {pagAtual === 'telainicio' ? <TelaInicio mudaPag={mudaPag}></TelaInicio> : <TelaFlashcards></TelaFlashcards>}
        </div>
    );
}

export default function Corpo2(){
    return(
        <div>
            <Pagina/>
        </div>
    );
}