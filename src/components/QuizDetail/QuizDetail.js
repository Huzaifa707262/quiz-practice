import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetail.css'

const QuizDetail = () => {
    const quiz = useLoaderData();

    const questions = quiz.data.questions;

    return (
        <div>
            <h1>Welcome Our  quiz practice</h1>

            <div className='questions.container'>
                {
                    questions.map(question => <Question
                        question={question}
                        answer={question.options}

                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;