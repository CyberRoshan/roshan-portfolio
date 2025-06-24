import { useState } from "react"
import Project from "./Project"
import WordPressProjects from "./WordPressProjects"
import '../assets/styles/Project.scss';


export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("custom-coding")

  return (
    <div className="">
  {/* Header */}
  <div id="previous-works" className="header">
    <h2 className="title">My Projects</h2>
    <p className="subtitle">Explore my work across different technologies and platforms</p>
  </div>

  {/* Tab Navigation */}
  <div className="tab-wrapper">
    <div className="tab-buttons">
      <button
        onClick={() => setActiveTab("custom-coding")}
        className={`tab-btn ${activeTab === "custom-coding" ? "active custom" : ""}`}
      >
        Custom Projects
      </button>
      <button
        onClick={() => setActiveTab("wordpress")}
        className={`tab-btn ${activeTab === "wordpress" ? "active wordpress" : ""}`}
      >
        WordPress Projects
      </button>
    </div>
  </div>

  {/* Tab Content */}
  <div className="tab-content">
    <div className={`tab-panel ${activeTab === "custom-coding" ? "visible" : "hidden"}`}>
      {activeTab === "custom-coding" && <Project />}
    </div>
    <div className={`tab-panel ${activeTab === "wordpress" ? "visible" : "hidden"}`}>
      {activeTab === "wordpress" && <WordPressProjects />}
    </div>
  </div>
</div>

  )
}