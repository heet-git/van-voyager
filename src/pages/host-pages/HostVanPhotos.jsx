import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos(){
    const van = useOutletContext()

    return(
        <img src={van.imageUrl} className ="host-van-info-photo" alt="photo of a van"/>
    )
}

export default HostVanPhotos