import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='quiz-name'>Quiz Practice</h1>
            <div >
                <Link className='link' to='/topics'>Topics</Link>
                <Link className='link' to='/statistics'>Statistics</Link>
                <Link className='link' to='/blog'>Blog</Link>
            </div>
        </nav>

    );
};

export default Navbar;