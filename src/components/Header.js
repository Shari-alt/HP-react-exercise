import "./Header.css";
import Navigation from "./Navigation";
import Logo from "../image/Logo.png";

export default function Header () {
    return (
        <div className="headerComponent"> 
        <img className="Logo" src={Logo} alt=""/> 
        <Navigation/>
        </div>
    );  
}