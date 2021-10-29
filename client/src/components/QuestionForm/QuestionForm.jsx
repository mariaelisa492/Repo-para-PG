import React from 'react';
import { addQuestion } from '../../redux/actions';

export function QuestionForm({productId, nickname}){
  
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
        addQuestion({question, productId});   
    }

return(
    <div className="question-form">
        <form onSubmit={(e) => handleSubmit(e, question, productId)}>
            <label> Your question: 
                <textarea
                    name="question"
                    value={question.question}
                    onChange={handleChange}
                    placeholder="Ask here"
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    </div>
    )

}