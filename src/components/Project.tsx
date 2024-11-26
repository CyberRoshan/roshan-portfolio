import React from "react";
import mock03 from '../assets/images/gobook.png';
import mock04 from '../assets/images/zenvi-img.png';
import mock05 from '../assets/images/kammaimg.png';
import mock06 from '../assets/images/travension-img.png';
import mock07 from '../assets/images/giexpimg.png';
import mock08 from '../assets/images/lawprepimg.png';
import mock09 from '../assets/images/sushma-img.png';
import mock10 from '../assets/images/frankoakimg.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Frank and Oak Ecommerce</h2>
                <p>Developed an ecommerce platform with customer-facing site and admin panel for product,
                category, and order management.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Sushma Group Real State</h2>
                <p>Developed the Sushma Group website with responsive and visually appealing design.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>LawPrepTutorial</h2>
                <p>Developed a responsive web platform providing tutorials and resources for law students.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Gi Express Taxi</h2>
                <p>Developed fully responsive customer and driver dashboards, developing 15+
                pages based on my design expertise and experience.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Traveinstein: Plan Your Travel</h2>
                <p>Developed fully responsive Landing Pages, User dashboards, CMS Portal, developing 15+
                pages.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>KAMMA: Administrative Dashboard</h2>
                <p>Developed the Administrative Dashboard for KAMMA included design, responsiveness, development of
                Dashboard in HTML5, Tailwind CSS, jQuery, JavaScript.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Zenvi : Unlock the power of thinking</h2>
                <p>Built a responsive landing page with Animation on Scroll (AOS) for dynamic
                UX, converting a desktop-only Figma design to a mobile-friendly version.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>GoBookTours : Book Your Destinations</h2>
                <p>Developed a responsive website for Gobooktours to display their destinations packages usig HTML5, CSS3, Bootstrap, Jquery.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;