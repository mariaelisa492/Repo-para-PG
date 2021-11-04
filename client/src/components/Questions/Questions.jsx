import React, {useEffect} from "react";
import {getQuestionsByProduct} from '../../redux/actions/index'
import { Question } from "../Question/Question";
import {useDispatch, useSelector} from "react-redux";
import './Questions.css'
import { BsChatRightTextFill } from 'react-icons/bs';


export function Questions({ questions}) {

    return (
        <div className="questionsS">
            <h2>Questions</h2>

            {questions.length > 0 
                ? <div>
                    {questions?.map(question => <Question key={question.id} user={question.user} question={question.question} answer={question.answer}/>)}
                </div>

                : <div  className='reviewContainer'>
                    <div className='noReviewsStar'>
                        <BsChatRightTextFill />
                    </div>

                    <div className='noReviewsH4'>
                        <h4>
                            No questions yet
                        </h4>
                    </div>
                </div>
            }
        </div>
    )
}