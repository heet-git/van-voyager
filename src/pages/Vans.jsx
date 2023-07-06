import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"

function Vans(){
    const [searchParams, setSearchParams] = useSearchParams() 
    const [vansList, setVansList] = useState([])

    useEffect(()=> {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data=> setVansList(data.vans))
    }, []) 
    
    const typeFilter = searchParams.get("type")
    const type = typeFilter 
    ? vansList.filter(van => van.type === searchParams.get("type")) 
    : vansList


    const vanElements = type.map( van => (
        <div key={van.id} className="van-container">
            <Link to={van.id} state={{search: `?${searchParams.toString()}`}}>
                <img src={van.imageUrl} className="van-img" alt="photo of a van"/>
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
            <div className="vans-container">
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