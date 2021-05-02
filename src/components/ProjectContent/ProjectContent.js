import React from 'react';
import './ProjectContent.css'

const ProjectContent = (props) => {
    const { title, photoURL, liveSite } = props.project
    return (
        <div className="project-content">
            <div className="project">
                <img src={photoURL} alt="" />
            </div>
            <div className="project-detail">
                <h3>{title}</h3>
                <a href={liveSite}>Live-Site</a>
            </div>
        </div>
    );
};

export default ProjectContent;