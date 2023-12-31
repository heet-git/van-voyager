import React from "react";
import {Link, useLoaderData} from "react-router-dom"
import { getHostVans } from "../../common/api";
// import { authRequired } from "../../common/utils";

export async function loader( {params} ){
    // await authRequired()
    return getHostVans(params.id)
}
function HostVan(){

const vanHost = useLoaderData()

const hostVans = vanHost.map( van => (
    <div>
    <Link
    to={`/host/vans/${van.id}`}
    key={van.id}
    className="host-van-link-wrapper"
    >
        <div className="listed-van">
            <img src={van.imageUrl} className="host-van-img" alt=""/>
            <div className="listed-van-info">
                <h3 className="host-van-name">{van.name}</h3>
                <p className="host-van-price">${van.price}/day</p>
            </div>
        </div>
    </Link>
</div>
))

    return(
        <div className="host-van-container">
            <h1 className="host-pages-title">Your Listed vans</h1>
            <div className="host-van-list"> 
                {hostVans}
            </div>
        </div>
    )
}

export default HostVan