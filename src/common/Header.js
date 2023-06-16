import React from "react";
import {Link} from "react-router-dom"

function Header() {
return (
    <header className="header">
        <div className="header-container">
            <div className="brand-container">
                <h1 className="brand-title">VanVoyager</h1>
            </div>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </div>
    </header>
);
}

export default Header