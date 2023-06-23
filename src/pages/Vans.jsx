import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Vans(){

    const [vansList, setVansList] = React.useState([])

    useEffect(()=> {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data=> setVansList(data.vans))
        
        return () => {
            // Cleanup code, if needed
        };
    }, []) 

    const vanElements = vansList.map( van => (
        <div key={van.id} className="van-container">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} className="van-img"/>
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
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}

export default Vans