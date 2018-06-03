import React from 'react';
import Component from './Component';


const ConversationComponent = (props) => {
    const answerList = props.answers.map((answer) => {
        // if type ===
        return <li> {answer} </li>
    });

    return (
        <div>
            <h1> {props.prompt} </h1>
            <ul> {answerList} </ul>
        </div>
    )
}

export default ConversationComponent
