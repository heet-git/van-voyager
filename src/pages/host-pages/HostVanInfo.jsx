import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function HostVanInfo(){

    const params = useParams()

    const[van, setVan] = useState(null)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])

    return(
        <div className="host-van-info-container">
        {van ? (
            <div className="host-van-detail">
            <img src={van.imageUrl} className ="host-van-detail-img" alt={`Photo of ${van.name}`}/>
                <div className="host-van-info">
                    <i className="van-type">{van.type}</i>
                    <h2>{van.name}</h2>  
                    <h3>${van.price}/day</h3>
                </div>
            </div>
        ): <p>Loading...</p>}
        </div>

    )
}

export default HostVanInfo