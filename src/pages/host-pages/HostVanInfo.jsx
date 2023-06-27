import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useParams, Link } from "react-router-dom";

function HostVanInfo(){

    const params = useParams()

    const[van, setVan] = useState(null)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])


    return(
        <section>
            <Link 
            to=".." 
            relative="path"
            className="back-button">
            &larr; Back to all vans
            </Link>
            <div className="host-van-info-container">
                    {van ? (
                    <div className="host-van-detail">
                    <img src={van.imageUrl} className ="host-van-detail-img" alt=""/>
                        <div className="host-van-info">
                            <i className="van-type">{van.type}</i>
                            <h2>{van.name}</h2>  
                            <h3>${van.price}/day</h3>
                        </div>
                    </div>
                    ): <p>Loading...</p>}
                    <nav className="van-info-links">
                        <NavLink to="." end className={({ isActive }) =>isActive ? "active" : ""}>Detail</NavLink>
                        <NavLink to="pricing" className={({ isActive }) =>isActive ? "active" : ""}>Pricing</NavLink>
                        <NavLink to="photos" className={({ isActive }) =>isActive ? "active" : ""}>Photos</NavLink>
                    </nav>
                <Outlet context={{van}}/>
            </div>
        </section>
    )
}

export default HostVanInfo