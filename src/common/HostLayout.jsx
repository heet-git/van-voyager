import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HostLayout(){
    return (
        <>
            <nav className="host-nav">
                <NavLink to="/host" end className={({ isActive }) =>isActive ? "active" : ""}>
                Dashboard
                </NavLink>
                <NavLink to="/host/income" className={({ isActive }) =>isActive ? "active" : ""}>
                Income
                </NavLink>
                <NavLink to="/host/reviews" className={({ isActive }) =>isActive ? "active" : ""}>
                Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout
