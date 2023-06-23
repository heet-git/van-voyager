import React from "react";
import {Link} from "react-router-dom"

function Header() {
return (
    <header>
        <div className="header-container">
            <div>
            <Link to ="/"className="site-name">VanVoyager</Link>
            </div>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/vans" className="nav-link">Vans</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </div>
    </header>
);
}

export default Header