import React from 'react'
import trueview from '../assets/images/1-min.png';
import oow from '../assets/images/2-min.png';
import victory from '../assets/images/3-min.png';
import tresdias from '../assets/images/4-min.png';
import paralaps from '../assets/images/6-min.png';
import pressurewashing from '../assets/images/8-min.png';
import sototrim from '../assets/images/7-min.png';
import travelinfoline from '../assets/images/5-min.png';
import '../assets/styles/Project.scss';

export default function WordPressProjects() {
  return (
   <div className="projects-container" id="projects">
        <h1 className='tech-title'>WordPress Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://trueviewlandscaping.com" rel="noreferrer" target="_blank">
                <img src={trueview} className="zoom" alt="thumbnail" width="100%"/>
                </a>
               <h2><a href="https://trueviewlandscaping.com" rel="noreferrer" target="_blank">True View Landscaping</a></h2>
                <p>True View Landscaping – A clean, responsive website developed in WordPress to showcase landscaping and maintenance services.</p>
            </div>
            <div className="project">
            <a href="https://orderonwheels.com" rel="noreferrer" target="_blank">
                <img src={oow} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://orderonwheels.com" rel="noreferrer" target="_blank">Order On Wheels</a></h2>
                <p>Order On Wheels – A dynamic food ordering platform developed in WordPress, offering seamless browsing and ordering from local vendors.</p>
            </div>
            <div className="project">
            <a href="https://victorsqualityremodeling.com" rel="noreferrer" target="_blank">
                <img src={victory} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://victorsqualityremodeling.com" rel="noreferrer" target="_blank">Victor's Quality Remodeling</a></h2>
                <p>Victor's Quality Remodeling – A WordPress-based website showcasing home remodeling and renovation services with a clean, professional layout.</p>
            </div>
            <div className="project">
                <a href="https://tresdiascleveland.org" rel="noreferrer" target="_blank">
                <img src={tresdias} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://tresdiascleveland.org" rel="noreferrer" target="_blank">Tres Dias Cleveland</a></h2>
                <p>Tres Dias Cleveland – A WordPress site built for a Christian community, featuring event info, registrations, and spiritual resources.</p>
            </div>
            <div className="project">
                <a href="https://perfectpalapastx.com" rel="noreferrer" target="_blank">
                <img src={paralaps} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://perfectpalapastx.com" rel="noreferrer" target="_blank">Perfect Palapas TX</a></h2>
                <p>Perfect Palapas TX – A vibrant WordPress site showcasing custom palapa and outdoor living solutions with project galleries and service details.</p>
            </div>
            <div className="project">
            <a href="https://laapressurewashing.com" rel="noreferrer" target="_blank">
                <img src={pressurewashing} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://laapressurewashing.com" rel="noreferrer" target="_blank">LAA Pressure Washing</a></h2>
                <p>LAA Pressure Washing – A clean and professional WordPress site highlighting residential and commercial pressure washing services.</p>
            </div>
            <div className="project">
            <a href="https://sototrim.com" rel="noreferrer" target="_blank">
                <img src={sototrim} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://sototrim.com" rel="noreferrer" target="_blank">SotoTrim Company</a></h2>
                <p>SotoTrim – A sleek WordPress website showcasing expert automotive trimming and restyling services with a strong visual portfolio.</p>
            </div>
            <div className="project">
                <a href="https://travelinfoline.us" rel="noreferrer" target="_blank">
                <img src={travelinfoline} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://travelinfoline.us" rel="noreferrer" target="_blank">Travel Info Line</a></h2>
                <p>Travel Info Line – An informative WordPress site offering travel guides, tips, and destination insights for U.S. travelers.</p>
            </div>
        </div>
    </div>
  )
}
