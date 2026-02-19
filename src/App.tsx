import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import PortfolioTabs from "./components/ProjectsTabs";

function App() {
    const [mode, setMode] = useState<string>('dark');
    const isEmbed = window.location.search.includes("embed=projects");
    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        
        {isEmbed ?  null : <>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            {/* <Project/> */}
            <PortfolioTabs/>
            <Contact/>
        </FadeIn>
        <Footer />
        </>}

        {isEmbed && <div className="pt-10 bg-black"><PortfolioTabs /></div>}
    </div>
    );
}

export default App;