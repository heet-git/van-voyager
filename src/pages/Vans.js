import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"
import { usePanGesture } from "@chakra-ui/react";

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
        <Link to={`/vans/${van.id}`}>
        <div key={van.id} className="van-name">
            <img src={van.imageUrl} className="van-img"/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <i className="van-type">{van.type}</i>
        </div>
        </Link> 
    ))

    return(
        <div>
            <Header />
            <div className="vans">
                <h1 className="van-title">Explore out van options</h1>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Vans