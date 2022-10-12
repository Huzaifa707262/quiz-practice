import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    console.log(quiz)
    const { id, name, logo } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h4>{name}</h4>

            <Link to={`/quiz/${id}`}><button className='btn'>Start Practice</button ></Link>
        </div >
    );
};

export default Quiz;