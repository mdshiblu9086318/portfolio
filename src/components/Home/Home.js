import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className="main">
            <Navbar></Navbar>
            <div>
                <div>
                    <ul className="social-icon">
                        <li><a href="https://www.facebook.com/mdshiblu822021/" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li><a href="https://github.com/mdshiblu9086318" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/md-shiblu-b6b433211/" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faLinkedin} /></a></li>
                        <li><a href="https://twitter.com/?lang=en" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faTwitter} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="bio-content">
                <h3 className="static-text">I'am Shiblu</h3>
                <h3 className="animation-text">Web Developer</h3>
            </div>
        </div >
    );
};

export default Home;