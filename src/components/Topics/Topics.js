import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes)
    const quizs = quizzes.data;
    // console.log(quizs)



    return (
        <div className='quiz-container'>
            {
                quizs.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>



    );
};

export default Topics;