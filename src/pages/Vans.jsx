import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../common/api"

export function loader() {
    return getVans()
}

function Vans(){
    const [searchParams, setSearchParams] = useSearchParams() 

const vansList = useLoaderData()

const typeFilter = searchParams.get("type")

    const type = typeFilter 
    ? vansList.filter(van => van.type === typeFilter) 
    : vansList

    const vanElements = type.map( van => (
        <div key={van.id} className="van-container">
            <Link to={van.id} state={{search: `?${searchParams.toString()}`}}>
                <img src={van.imageUrl} className="van-img" alt=""/>
                <div className="van-info">
                    <h3 className="van-title-name">{van.name}</h3>
                    <p>${van.price}/day</p>
                    <i className="van-type">{van.type}</i>
                </div>
            </Link>
        </div>
    ))

    return(
        <div>
            <div className="vans">
                <h1 className="van-title">Explore our van options</h1>
                <div className="filters">
                    <button onClick={() => setSearchParams({type: "Luxury"})}>Luxury</button>
                    <button onClick={() => setSearchParams({type: "Rugged"})}>Rugged</button>
                    <button onClick={() => setSearchParams({type: "Simple"})}>Simple</button>
                    {typeFilter ? <Link to="">Clear filter</Link> : null}
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}

export default Vans