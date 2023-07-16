import React from "react";
import { Outlet, NavLink, Link, useLoaderData} from "react-router-dom";
import { getHostVans } from "../../common/api";

export function loader( {params} ){
    return getHostVans(params.id)
}

function HostVanInfo(){

    const van = useLoaderData()
    
    return(
        <section>
            <Link 
            to=".." 
            relative="path"
            className="back-button">
            &larr; Back to all vans
            </Link>
            <div className="host-van-info-container">
                    <div className="host-van-detail">
                    <img src={van.imageUrl} className ="host-van-detail-img" alt="photo of a van"/>
                        <div className="host-van-info">
                            <i className="van-type">{van.type}</i>
                            <h2>{van.name}</h2>  
                            <h3>${van.price}/day</h3>
                        </div>
                    </div>
                    <nav className="van-info-links">
                        <NavLink to="." end className={({ isActive }) =>isActive ? "active" : ""}>
                        Detail
                        </NavLink>
                        <NavLink to="pricing" className={({ isActive }) =>isActive ? "active" : ""}>
                        Pricing
                        </NavLink>
                        <NavLink to="photos" className={({ isActive }) =>isActive ? "active" : ""}>
                        Photos
                        </NavLink>
                    </nav>
                <Outlet context={van} />
            </div>
        </section>
    )
}

export default HostVanInfo