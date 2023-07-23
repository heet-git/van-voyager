import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profileImg from "../assets/profile.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }

return (
    <header>
        <div className="header-container">
            <div>
            <NavLink to ="/"className="site-name">VanVoyager</NavLink>
            </div>
            <div className="navbar">
                <div className="nav-pages">
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className= "nav-menu" onClick={toggleMenu}>
                        <li className="nav-item" >
                            <NavLink to="/" className={({ isActive }) =>isActive ? "active" : ""}>
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <NavLink to="vans" className={({ isActive }) =>isActive ? "active" : ""}>
                            Vans
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <NavLink to="host" className={({ isActive }) =>isActive ? "active" : ""}>
                            Host
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <NavLink to="about" className={({ isActive }) =>isActive ? "active" : ""}>
                            About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="login" className="login-link">
                    <img src={profileImg} alt="profile" className="profileImg"/>
                </Link>
            </div>
        </div>
    
    <style jsx> {`

    .hamburger{
            display: none;
        }
    
    @media all and (max-width: 480px){
            .hamburger{
                display: block;
            }
            
            .bar:nth-child(1){
                transform: ${ isMenuOpen ? "translateY(8px) rotate(45deg)" 
                : "rotate(0)"};
            }
        
            .bar:nth-child(2){
                opacity: ${ isMenuOpen ? "0" : "1" };
            }
        
            .bar:nth-child(3){
                transform: ${ isMenuOpen ? "translateY(-8px) rotate(-45deg)" 
                : "rotate(0)"};
            }

            .nav-menu{
                display: ${isMenuOpen ? "flex" : "none"};
            }
        }
    
    `} </style>

    </header>
);
}

export default Header