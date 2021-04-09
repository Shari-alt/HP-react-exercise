import "./Header.css";
import Navigation from "./Navigation";
import hpLogo from "../image/hpLogo.png";

export default function Header () {
    return (
        <div className="headerComponent"> 
        <img className="Logo" src={hpLogo} alt=""/> 
        <Navigation/>
        </div>
    );  
}