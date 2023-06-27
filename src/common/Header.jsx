import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
return (
    <header>
        <div className="header-container">
            <div>
            <NavLink to ="/"className="site-name">VanVoyager</NavLink>
            </div>
            <nav className="navbar">
                <NavLink to="/" className={({ isActive }) =>isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="vans" className={({ isActive }) =>isActive ? "active" : ""}>Vans</NavLink>
                <NavLink to="host" className={({ isActive }) =>isActive ? "active" : ""}>Host</NavLink>
                <NavLink to="about" className={({ isActive }) =>isActive ? "active" : ""}>About</NavLink>
            </nav>
        </div>
    </header>
);
}

export default Header