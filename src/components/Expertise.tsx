import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Next.js",
    "Redux.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
    "JQuery",
    "Node.js",
    "express.js",
    "MongoDB",
    "Mongoose",
    "Git",
    "Firebase",
    "REST API's",
    "Postman",
    "SQL",
    "PHP",
    "Laravel",
    "Third-party API integration",
    "Code optimization",
    "AWS"
];



function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>As a skilled full-stack developer, I specialize in building dynamic, responsive web applications with expertise in React, Node.js, and MongoDB. I excel in creating seamless user experiences, robust backend systems, and scalable architectures. My commitment to delivering high-quality code ensures efficient and innovative solutions for diverse project needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' style={{fontWeight:"bold"}} label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;