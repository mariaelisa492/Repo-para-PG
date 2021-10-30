import React, {useEffect} from "react";
import {getQuestionsByProduct} from '../../redux/actions/index'
import { Question } from "../Question/Question";
import {useDispatch, useSelector} from "react-redux";
import './Questions.css'


export function Questions({ questions}) {

    return (
        <div className="questionsS">
            <h2>Questions</h2>
            {questions?.map(question => <Question key={question.id} user={question.user} question={question.question} answer={question.answer}/>)}
        </div>
    )
}