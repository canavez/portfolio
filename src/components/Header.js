import "./Header.css"
import reactIcon from "../imgs/react-icon.png"
import jsIcon from "../imgs/js-icon.png"
import htmlIcon from "../imgs/html-icon.png"
import cssIcon from "../imgs/css-icon.png"
import figmaIcon from "../imgs/figma-icon.png"

const Header = () => {
  return (
    <div className="header">
        <div className="text-header">
            <h2>Hi, my name is</h2>
            <h1>TADEU CANAVEZ</h1>
            <h2>I'm a <span className="frontend-text">frontend developer</span>.</h2>
        </div>
        <div className="icons-header">
            <img src={reactIcon} alt="react-icon" className="icon-header"/>
            <img src={jsIcon} alt="js-icon" className="icon-header"/>
            <img src={htmlIcon} alt="html-icon" className="icon-header"/>
            <img src={cssIcon} alt="css-icon" className="icon-header"/>
            <img src={figmaIcon} alt="figma-icon" className="icon-header"/>
        </div>
    </div>
  )
}

export default Header