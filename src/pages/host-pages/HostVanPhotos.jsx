import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos(){
    const van = useOutletContext()

    console.log("photo", van)

    return(
        <img src={van.imageUrl} className ="host-van-info-photo" alt=""/>
    )
}

export default HostVanPhotos