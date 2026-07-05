import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { ArrowRight } from "lucide-react";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="MARCH 2025  - PRESENT"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Full Stack Developer</h3>
            <p>
            ➜ Developed and deployed custom full-stack web applications for <b>startups and businesses</b>.
            <br />
            ➜ <b>Collaborated directly with clients</b> to gather requirements and deliver scalable solutions.
            <br />
            ➜  Integrated REST APIs, payment gateways, authentication, and third-party services.
            <br />
            ➜ Optimized website performance, responsiveness, SEO, and Core Web Vitals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="JUNE 2024 - FEB 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle comName">WsCube Tech</h4>
            <p>
            ➜ Primary responsibilities included <b>design, research, development, and
            maintenance of the websites</b>.
            <br />
            ➜ <b>Developed and maintained user interfaces</b> for web applications using modern
            frameworks.
            <br />
            ➜  <b>Communicating with clients regarding project</b> requirements and specifications
            <br />
            ➜ Create <b>APIs for mobile & web apps</b>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="DECEMBER 2023 - MAY 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle comName"> Iway Digital</h4>
            <p>
            ➜ Primary responsibilities included <b>design, research, development, and
            maintenance of the websites</b>.
            <br />
            ➜ <b>Communicating with clients</b> regarding project requirements and
            specifications.
            <br />
            ➜ Implemented <b>responsive designs</b> and ensured <b>cross-browser compatibility</b>.
            <br />
            ➜ <b> Wrote clean, reusable, and maintainable code</b> while adhering to best practices.
            </p>
          </VerticalTimelineElement>
        
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;