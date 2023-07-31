import "./Projects.css"

import valorantSite from "../imgs/valorant-site.png"
import overwatchSite from "../imgs/overwatch-site.png"
import aprovaSite from "../imgs/aprova-site.png"

const Projects = () => {
  return (
    <div className="projects-container">
        <div className="header-projects">
            <h2>My projects</h2>
        </div>
        <div className="projects-cards">
            <div className="project-card" onClick={() => window.open("https://canavez.github.io/valorant-agents/", "_blank")}>
                <div className="black-filter">
                    <h2 className="site-name">Valorant Agents</h2>
                </div>
                <img src={valorantSite} alt="valorant-site" />
            </div>
            <div className="project-card" onClick={() => window.open("https://www.solucoesmoderna.com.br/produtos-de-educacao/campanha-ideb-2023/", "_blank")}>
                <div className="black-filter">
                    <h2 className="site-name">Aprova Brasil</h2>
                </div>
                <img src={aprovaSite} alt="valorant-site" />
            </div>
            <div className="project-card" onClick={() => window.open("https://canavez.github.io/overwatch-heroes/", "_blank")}>
                <div className="black-filter">
                    <h2 className="site-name">Overwatch Heroes</h2>
                </div>
                <img src={overwatchSite} alt="valorant-site" />
            </div>
        </div>
    </div>
  )
}

export default Projects