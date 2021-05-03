import React from 'react';
import './About.css'
import image from '../../images/pic.png'
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div>
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className="me-content">
                <div style={{ display: 'flex' }}>
                    <img src={image} alt="" />
                    <div style={{ borderLeft: '2px solid lightgray', marginLeft: '20px' }}>
                        <h2>About Me</h2>
                        <p>Obviously I'm a web developer.Web Developer with over 3 month + of experience.Experienced with all stages of the development cycle for dynamic web projects.I always try to show unique views to the audience through my design.</p>
                        <a className="resume" href="https://drive.google.com/file/d/1PlgAFnlPzWdqvS3sGROwZ0ZeoOZBZedA/view?usp=sharing">Resume</a>
                    </div>
                </div>
                <div style={{ margin: '-50px 0 0 350px' }}>
                    <ul className="icon">
                        <li><a href="https://www.facebook.com/mdshiblu822021/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li><a href="https://github.com/mdshiblu9086318"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/md-shiblu-b6b433211/"><FontAwesomeIcon className="icon active-icon" icon={faLinkedin} /></a></li>
                        <li><a href="https://twitter.com/?lang=en"><FontAwesomeIcon className="icon active-icon" icon={faTwitter} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;