import "./Header.css";
import Navigation from "./Navigation";
import HPLogo from "../image/HPLogo.png";

export default function Header () {
    return (
        <div className="headerComponent"> 
        <img className="Logo" src={HPLogo} alt=""/> 
        <Navigation/>
        </div>
    );  
}