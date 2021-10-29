import React, {useEffect} from "react";
import {getQuestionsByProduct} from '../../redux/actions/index'
import { Question } from "../Question/Question";
import {useDispatch, useSelector} from "react-redux";


export function Questions({productId}) {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    
    useEffect(() => {
        dispatch(getQuestionsByProduct(productId))
    }, [])



    return (
        <div className="questions">
            {questions?.map(question => <Question key={question.id} user={question.user} question={question.question} answer={question.answer}/>)}
        </div>
    )
}