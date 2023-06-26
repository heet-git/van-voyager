import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function HostVan(){
const [vanHost, setVanHost] = useState([])

useEffect(()=>{
    fetch("/api/host/vans")
    .then (res => res.json())
    .then (data => setVanHost(data.vans))
},[])

const hostVans = vanHost.map( van => (
    <Link
    to={`/host/vans/${van.id}`}
    key={van.id}
    className="host-van-link-wrapper"
    >
        <div className="listed-van">
            <img src={van.imageUrl} className="host-van-img" alt={`Photo of ${van.name}`}/>
            <div className="listed-van-info">
                <h3 className="host-van-name">{van.name}</h3>
                <p className="host-van-price">${van.price}/day</p>
            </div>
        </div>
    </Link>
))

    return(
        <div className="host-van-container">
            <h1 className="host-pages-title">Your Listed vans</h1>
            <div className="host-van-list">
                {vanHost.length> 0 ? (
                    <section>
                    {hostVans}
                    </section>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    )
}

export default HostVan