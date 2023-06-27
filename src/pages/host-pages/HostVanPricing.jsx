import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing(){
const van = useOutletContext()

    return(
        <p className="van-into-price">${van.price}.00<span>/day</span></p>
    )
}

export default HostVanPricing