import React from 'react';
import './Blog.css'
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <div>
            <div style={{ background: 'rgb(70,74,72)' }}>
                <Navbar></Navbar>
            </div>
            <h1 className="blog-title">Comming Soon In Next Week.</h1>
        </div>
    );
};

export default Blog;