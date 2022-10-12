import React from 'react';
import './Question.css'

const Question = ({ question, answer }) => {
    // console.log(question)
    console.log(answer);
    return (
        <div className='question'>
            <h4>Quiz:{question.question}</h4>

            <ul >
                <input className='option' type="radio" value="Q" name="A" /> {answer[0]}
                <input className='option' type="radio" value="Q" name="A" /> {answer[1]}
                <input className='option' type="radio" value="Q" name="A" /> {answer[3]}

            </ul>
        </div>
    );
};

export default Question;