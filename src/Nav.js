import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>
                <img height="100px" className="logo" src="https://www.realtor.com/realtor-com.png" alt="logo" />
            </Link>
            <h1>Earthquake Zen Garden</h1>
            <Link to='/profile'>
                Welcome Sally
            </Link>
        </nav>
    )
}

export default Nav;