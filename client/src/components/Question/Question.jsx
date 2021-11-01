import React from 'react';
import './Question.css';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { BsChatRightTextFill } from 'react-icons/bs';


export function Question({ user, question, answer }) {

    return (
        <div className="reviewContainer">
            <div className="info-review">
                <div className='ratingReview'>
                    <BsChatLeftTextFill className="user-message-icon" />
                    <div className="userQuestion">{user}    </div>
                    <div className="userWants"> wants to know...</div>
                </div>
                <div className='question'>
                    <div>{question}</div>
                </div>
            </div>
            <div className="info-review">

                <div className='answerContainer'>
                    <div className="userQuestion">Answer<BsChatRightTextFill className="admin-message-icon" /></div>
                </div>
                <div className='answer'>
                    <div>{answer}</div>
                </div>
            </div>
        </div>
    )
}