import React from 'react';
import { addQuestion } from '../../redux/actions';
import './QuestionForm.css'

export function QuestionForm({productId, nickname, close}){
  
    const [question, setQuestion] = React.useState({
        question: '',
        user: nickname,
    });

 

    function handleChange(e){
        e.preventDefault();
        setQuestion({
            ...question,
            question: e.target.value
        });
    }

    const handleSubmit= (e, question, productId) => {
        e.preventDefault();
        console.log(productId, 'productId en handleSubmit');    
        addQuestion({question, productId})
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
    <form onSubmit={(e) => handleSubmit(e, question, productId)}>
        <div className='closeQuestionForm' onClick={handleClose}>X</div>
            <div className="questionForm">
            <h1> Your question:  </h1>
                <textarea
                    name="question"
                    value={question.question}
                    onChange={handleChange}
                    placeholder="Ask here"
                />
            
            <button type="submit">Send</button>
    </div>
        </form>
    )

}