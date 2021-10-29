import React from 'react';


export function Question({user, question, answer}) {

    return (
        <div className="questionC">
            <h3>{user}</h3>
            <p>{question}</p>
            <div className="answerC">
                <p>{answer}</p>
            </div>
        </div>  
    )
}