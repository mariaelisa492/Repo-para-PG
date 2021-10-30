import React from 'react';
import './Question.css'


export function Question({user, question, answer}) {

    return (
        <div className="questionAll">
            <div className="questionC">
                <div className='userinQ'>
                    <h4>The user </h4>
                    <h3>{user}</h3>
                    <h4> wants to know...</h4>
                </div>
                <div className='question'>
                    <p>{question}</p>
                </div>
            </div>
            <div className="answerC">
                <div className='answer'>
                    <h5>Answer:</h5>
                    <p>{answer}</p>
                </div>
            </div>
        </div>  
    )
}