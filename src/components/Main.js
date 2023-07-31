import Header from "./Header"
import "./Main.css"
import Profile from "./Profile"
import Projects from "./Projects"

const Main = () => {
  return (
    <div className="main">
        <div className="top-container">
            <Profile />
            <Header />
        </div>
        <div className="projects-container">
            <Projects />
        </div>
        <div className="footer">
          <h4 onClick={() => window.open("https://github.com/canavez", "_blank")}>Github</h4>
          <h4 onClick={() => window.open("https://www.linkedin.com/in/tadeucanavez/", "_blank")}>LinkedIn</h4>
        </div>
    </div>
  )
}

export default Main