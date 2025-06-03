import React from "react";
import mock03 from '../assets/images/gobook.png';
import mock04 from '../assets/images/zenvi-img.png';
import mock05 from '../assets/images/kammaimg.png';
import mock06 from '../assets/images/travension-img.png';
import mock07 from '../assets/images/giexpimg.png';
import mock08 from '../assets/images/lawprepimg.png';
import mock09 from '../assets/images/sushma-img.png';
import mock10 from '../assets/images/frankoakimg.png';
import bahari from '../assets/images/bahari.png';
import edushrine from '../assets/images/edushrine.png';
import econ from '../assets/images/econ.png';
import econ2 from '../assets/images/econ2.png';
import multiweb from '../assets/images/multiweb.png';
import fashionz from '../assets/images/fashionz.png';
import susmmajs from '../assets/images/sushma-js.png';
import plantour from '../assets/images/plantour.png';
import iconMarket from '../assets/images/iconmarket.png';
import munch from '../assets/images/munch.png';
import '../assets/styles/Project.scss';

function Project() {
    function openLinks() {
        window.open("https://frankandoak-website.vercel.app", "_blank");
        window.open("https://frankandoak-backend.vercel.app", "_blank");
      }
    return(
    <div className="projects-container" id="projects">
        <h1 className="tech-title">Custom Projects</h1>
        <div className="projects-grid">
            <div className="project">
            <div onClick={openLinks} className="cursor-pointer">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                </div>
                <h2><div className="cursor-pointer" onClick={openLinks}>Frank and Oak Ecommerce</div></h2>
                <p>Developed an ecommerce platform with customer-facing site and admin panel for product,
                category, and order management.</p>
            </div>
            <div className="project">
                <a href="https://giexpresstaxi.co.uk/cabfinal" rel="noreferrer" target="_blank">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                </a>
               <h2><a href="https://giexpresstaxi.co.uk/cabfinal" rel="noreferrer" target="_blank">Gi Express Taxi</a></h2>
                <p>Developed fully responsive customer and driver dashboards, developing 15+
                pages based on my design expertise and experience.</p>
            </div>
            <div className="project">
            <a href="https://sushmagroup.realtynivesh.com" rel="noreferrer" target="_blank">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://sushmagroup.realtynivesh.com" rel="noreferrer" target="_blank">Sushma Group Real State</a></h2>
                <p>Developed the Sushma Group website with responsive and visually appealing design.</p>
            </div>
            <div className="project">
                <a href="https://cyberroshan.github.io/lawpreptutorial.github.io" rel="noreferrer" target="_blank">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://cyberroshan.github.io/lawpreptutorial.github.io" rel="noreferrer" target="_blank">LawPrepTutorial</a></h2>
                <p>Developed a responsive web platform providing tutorials and resources for law students.</p>
            </div>
            <div className="project">
                <a href="https://munch-zeta.vercel.app" rel="noreferrer" target="_blank">
                <img src={munch} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://munch-zeta.vercel.app" rel="noreferrer" target="_blank">Manch</a></h2>
                <p>Developed a responsive website providing services and resources for court services.</p>
            </div>
            <div className="project">
            <a href="https://icon-market-research.vercel.app/" rel="noreferrer" target="_blank">
                <img src={iconMarket} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://icon-market-research.vercel.app/" rel="noreferrer" target="_blank">ICON Market Research</a></h2>
                <p>Developed the ICON Market Research site with Tailwind CSS in a modern business theme. Designed and coded a fully responsive layout.</p>
            </div>
            <div className="project">
                <a href="https://www.econmarketresearch.com/" rel="noreferrer" target="_blank">
                <img src={econ} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://www.econmarketresearch.com/" rel="noreferrer" target="_blank">Econ Market Researchs</a></h2>
                <p>Revamped the ECON market research site with 25+ pages, making it modern, fully responsive, and resolving performance issues.</p>
            </div>
            <div className="project">
                <a href="https://bahri-frontend.vercel.app/home.html" rel="noreferrer" target="_blank">
                <img src={bahari} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://bahri-frontend.vercel.app/home.html" rel="noreferrer" target="_blank">Bahari</a></h2>
                <p>Developed the Bahari site with 30+ pages by converting Figma to code using Bootstrap, ensuring it’s fully responsive and pixel-perfect.</p>
            </div>
            <div className="project">
                <a href="https://kamma-admin-panel-rdzf.vercel.app" rel="noreferrer" target="_blank">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://kamma-admin-panel-rdzf.vercel.app" rel="noreferrer" target="_blank">KAMMA: Administrative Dashboard</a></h2>
                <p>Developed the Administrative Dashboard for KAMMA included design, responsiveness, development of
                Dashboard in HTML5, Tailwind CSS, jQuery, JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://zenvi-landing-page.vercel.app" rel="noreferrer" target="_blank">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://zenvi-landing-page.vercel.app" rel="noreferrer" target="_blank">Zenvi : Unlock the power of thinking</a></h2>
                <p>Built a responsive landing page with Animation on Scroll (AOS) for dynamic
                UX, converting a desktop-only Figma design to a mobile-friendly version.</p>
            </div>
            <div className="project">
                <a href="https://traveinstein.com/" rel="noreferrer" target="_blank">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://traveinstein.com/" rel="noreferrer" target="_blank">Traveinstein: Plan Your Travel</a></h2>
                <p>Developed fully responsive Landing Pages, User dashboards, CMS Portal, developing 15+
                pages.</p>
            </div>
            <div className="project">
                <a href="https://econresearchs.com/" rel="noreferrer" target="_blank">
                <img src={econ2} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://econresearchs.com/" rel="noreferrer" target="_blank">Econ Researchs</a></h2>
                <p>Revamped the Econ researchs site with 25+ pages, making it modern, fully responsive, and resolving performance issues.</p>
            </div>
            <div className="project">
            <a href="https://www.multiverbalcreations.com" rel="noreferrer" target="_blank">
                <img src={multiweb} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://www.multiverbalcreations.com" rel="noreferrer" target="_blank">Multi Verbal Creations</a></h2>
                <p>Developed the Multi Verbal Creations website with a modern, fully responsive design using Tailwind CSS.</p>
            </div>
            <div className="project">
            <a href="https://edushrine.in/" rel="noreferrer" target="_blank">
                <img src={edushrine} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://edushrine.in/" rel="noreferrer" target="_blank">Edushrine</a></h2>
                <p>Developed the Edushrine Coaching Institute site and dashboard using React and Tailwind CSS for a modern, responsive design.</p>
            </div>
            <div className="project">
                <a href="https://cyberroshan.github.io/Sushma-Service-Partner-Clone.github.io" rel="noreferrer" target="_blank">
                <img src={susmmajs} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://cyberroshan.github.io/Sushma-Service-Partner-Clone.github.io" rel="noreferrer" target="_blank">Sushma Landing Page</a></h2>
                <p>Developed a responsive website for Sushma Real State to display their Projects using HTML5, CSS3, Javascript.</p>
            </div>
            <div className="project">
                <a href="https://cyberroshan.github.io/Fashionz-Website-Clone.github.io" rel="noreferrer" target="_blank">
                <img src={fashionz} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://cyberroshan.github.io/Fashionz-Website-Clone.github.io" rel="noreferrer" target="_blank">Fashionz by Danube</a></h2>
                <p>Developed a responsive website for Fashionz by Danube to display their Plots and Flats usig HTML5, CSS3, Jquery and Javascript.</p>
            </div>
            <div className="project">
                <a href="https://cyberroshan.github.io/Kerala-Plan-Tours.github.io" rel="noreferrer" target="_blank">
                <img src={plantour} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <h2><a href="https://cyberroshan.github.io/Kerala-Plan-Tours.github.io" rel="noreferrer" target="_blank">Plan Your Tours</a></h2>
                <p>Developed a responsive website for Plan your tours to display their destinations packages usig HTML5, CSS3 and Javascript.</p>
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