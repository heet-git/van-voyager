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
                <div className="nav-pages">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) =>isActive ? "active" : ""}>
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="vans" className={({ isActive }) =>isActive ? "active" : ""}>
                            Vans
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="host" className={({ isActive }) =>isActive ? "active" : ""}>
                            Host
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="about" className={({ isActive }) =>isActive ? "active" : ""}>
                            About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="login" className="login-link">
                    <img src={profileImg} alt="profile" className="profileImg"/>
                </Link>
            </nav>
        </div>
    </header>
);
}

export default Header