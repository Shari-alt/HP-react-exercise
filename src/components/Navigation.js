import {NavLink} from "react-router-dom";
import "./Navigation.css";

export default function Navigation () {
    return (
        <nav className="NavLink">
        <NavLink exact to="/"> Home </NavLink>
        <NavLink to="/characters"> Characters </NavLink>
        </nav>
    )
}