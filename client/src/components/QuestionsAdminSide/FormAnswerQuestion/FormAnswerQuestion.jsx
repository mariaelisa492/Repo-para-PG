import axios from 'axios';
import React, { useState } from 'react';
import { LOCALHOST_URL } from '../../../redux/constants';
import './FormAnswerQuestion.css';
import { useDispatch } from 'react-redux';
import { toggleUpdate } from "../../../redux/actions/";

export function FormAnswerQuestion({questA, handleClosePopup}) {
    const question = questA[0]

    const dispatch = useDispatch();

    const [answer, setAnswer] = useState('');;


    const handleChange = (event) => {
        setAnswer(event.target.value);
    }

    async function sendAnswer() {
        dispatch(toggleUpdate());
        try{
              await axios.post(`${LOCALHOST_URL}/products/questions?product=${question.questionFromProduct}&question=${question.question._id}`, {answer: answer})
        } catch(err) {
            console.log(err)
        }finally{
            dispatch(toggleUpdate());
        }
    }
       

    const handleSubmit = (event) => {
        event.preventDefault();
        sendAnswer().then(() => {
            handleClosePopup();
        })      
    }

    console.log(question, 'question on AnswerForm');

    return (
        <div className="review">
            <form className='form' onSubmit={(e) => handleSubmit(e, answer)}>
                <div className='QuestionToAnswer' >
                    <p>{question.question.question}</p>
                </div>
                <div className='answer'>
                    <textarea className='textAF' name='answer' value={answer} onChange={handleChange} />
                </div>
                <div className='butons-container'>
                    <button className='reviewBackBtn' type='submit'>Submit</button>
                    <button className='reviewBackBtn' onClick={handleClosePopup}> Back</button>
                </div>
            </form>
        </div>
    );
}