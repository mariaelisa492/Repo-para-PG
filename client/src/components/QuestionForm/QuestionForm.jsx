import React from 'react';
import { addQuestion } from '../../redux/actions';
import './QuestionForm.css'

export function QuestionForm({productN, productId, nickname, close}){
  
    console.log(productN)
    const [question, setQuestion] = React.useState({
        question: '',
        user: nickname,
        productq: productId,
        productn: productN
    });

 

    function handleChange(e){
        e.preventDefault();
        setQuestion({
            ...question,
            question: e.target.value
        });
    }

    const handleSubmit= (e, question) => {
        e.preventDefault();
        console.log(question.productId, 'productId en handleSubmit');    
        addQuestion({question})
        window.location.reload();   
    }

    const handleClose = (e) => {
        e.preventDefault();
        setQuestion({
            question: '',
            user: nickname,
        })
        close();
    }

return(
    <div className="questionForm">
        <form className='form' onSubmit={(e) => handleSubmit(e, question, productId)}>
            <h1> Your question:  </h1>
                <textarea
                    className="reviewText"
                    name="question"
                    value={question.question}
                    onChange={handleChange}
                    placeholder="Ask here"
                />
            <div className='butons-container' >
                <button type="submit">Send</button>
                <button type="button" onClick={handleClose}>Back</button>
            </div>
        </form>
    </div>
    )

}