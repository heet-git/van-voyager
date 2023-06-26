import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HostLayout(){
    return (
        <div className="host-page">
            <nav className="host-nav">
                <NavLink to="/host" end className={({ isActive }) =>isActive ? "active" : ""}>
                Dashboard
                </NavLink>
                <NavLink to="/host/income" className={({ isActive }) =>isActive ? "active" : ""}>
                Income
                </NavLink>
                <NavLink to="/host/vans" className={({ isActive }) =>isActive ? "active" : ""}>
                Vans
                </NavLink>
                <NavLink to="/host/reviews" className={({ isActive }) =>isActive ? "active" : ""}>
                Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout
