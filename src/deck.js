import React from "react";

function FlashCard1Virado(){
    return(
        <div>
            <div className="flashcard-virado">
                <div className="fracao">
                    1/8
                </div>
                <div className="pergunta">
                    O que é JSX?
                </div>
                <div className="resposta">
                    Uma extensão de linguagem do JavaScript
                </div>
                
                <div className="botoes">
                    <button className="neutro">Aprendi agora</button>
                    <button className="incorreto">Não lembrei</button>
                    <button className="correto">Lembrei com esforço</button>
                    <button className="zap">Zap!</button>
                </div>
            </div>
        </div>
    );
}

function FlashCard1(props){
    return(
        <div>
            <div className="flashcard1">
                <div className="fracao">
                    1/8
                </div>
                O que é JSX?
                <img src="./assets/turn.png" onClick={props.mudaCard} data-identifier="arrow"/>
            </div>
        </div>
    );
}

export default function TelaFlashcards(){
    const [card, setCard] = React.useState('flashcard1');
    function mudaCard(){
        setCard('flashcard1virado');
    }
    return(
        <div className="tela-flashcards">
                <img className="mini-logo" src="./assets/logo-mini.png"/>
                <div className="caixa-central">
                    {card === 'flashcard1' ? <FlashCard1 mudaCard={mudaCard}></FlashCard1> : <FlashCard1Virado></FlashCard1Virado>}
                </div>
            </div>
    );
}