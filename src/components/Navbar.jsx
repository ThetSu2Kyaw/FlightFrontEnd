import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Flymya</Link>
                <div className="navbar-nav">
                    <Link className='nav-link' to="/">home</Link>
                    <Link to="https://flymya.com/en/about-us" className='nav-link'>about</Link>
                    {/* <Link to="/create" className='nav-link'>
                        <button className='create-btn' type='button'>create</button>
                    </Link> */}
                </div>
            </div>
        </nav>
    )
}
