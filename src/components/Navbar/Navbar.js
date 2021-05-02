import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1 style={{color:'white'}}>Logo</h1>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/project">Project</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
