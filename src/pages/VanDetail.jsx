import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../common/api"

export function loader( {params} ){
    return getVans(params.id)
}

export default function VanDetail() {
    const location = useLocation()

    const vanInfo = useLoaderData()

    const url = (location.state && location.state.search) || ""

    return (
        <div className="van-detail-container">
            <Link
                to={`..${url}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to vans</span></Link>

            <div className="van-detail">
                <img src={vanInfo.imageUrl} className="van-detail-img" alt=""/>
                <div className="van-detail-intro">
                    <i className={`van-type ${vanInfo.type} selected`}>
                        {vanInfo.type}
                    </i>
                    <h2 className="van-desc-name">{vanInfo.name}</h2>
                    <p className="van-price">${vanInfo.price}/day</p>
                    <p className="van-detail-desc">{vanInfo.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </div>
            
        </div>
    )
}