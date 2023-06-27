import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HostLayout(){
    return (
        <div className="host-page">
            <nav className="host-nav">
                <NavLink to="." end className={({ isActive }) =>isActive ? "active" : ""}>
                Dashboard
                </NavLink>
                <NavLink to="income" className={({ isActive }) =>isActive ? "active" : ""}>
                Income
                </NavLink>
                <NavLink to="vans" className={({ isActive }) =>isActive ? "active" : ""}>
                Vans
                </NavLink>
                <NavLink to="reviews" className={({ isActive }) =>isActive ? "active" : ""}>
                Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout
