import React from "react";
import { Link, NavLink } from "react-router-dom";
import profileImg from "../assets/profile.png"

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
                <Link to="login" className="login-link">
                    <img src={profileImg} className="profileImg"/>
                </Link>
            </nav>
        </div>
    </header>
);
}

export default Header