import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetail(){
    const van  = useOutletContext()
    return(
        <div className="van-info">
        <p><span className="info-title">Name: </span>{van.name}</p>
        <p><span className="info-title">Category: </span>{van.type}</p>
        <p><span className="info-title">Description: </span>{van.description}</p>
        <p><span className="info-title">Visibility: </span>Public</p>
        </div>
    )
}

export default HostVanDetail