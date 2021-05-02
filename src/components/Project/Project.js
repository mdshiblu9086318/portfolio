import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Project.css'
import project1 from '../../images/js-dom.png'
import project2 from '../../images/simple-react.png'
import project3 from '../../images/node-js.png'
import ProjectContent from '../ProjectContent/ProjectContent';

const Project = () => {
    const projects = [
        {
            title: 'CRUISE Booking',
            photoURL : project1,
            liveSite: 'https://mdshiblu9086318.github.io/assignment-4/'
        },
        {
            title: 'Bangladesh Team',
            photoURL : project2,
            liveSite: 'https://angry-clarke-d63d9a.netlify.app/'
        },
        {
            title: 'CRUISE Booking',
            photoURL : project3,
            liveSite: 'https://totheminute.web.app/'
        }
    ]
    return (
        <div>
            <div style={{ background: 'rgb(70,74,72)' }}>
                <Navbar></Navbar>
            </div>
            <div className="project-container">
                <h1>Latest Project</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                {
                    projects.map(project => <ProjectContent project={project}></ProjectContent>)
                }
            </div>
        </div>
    );
};

export default Project;