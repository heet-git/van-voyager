import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header"
import Footer from "../common/Footer"

function VanDetail(){
    const params = useParams()
    const [vanDetails, setVanDetails] = useState(null)

useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVanDetails(data.vans))

    return () => {
    // Cleanup code, if needed
    };
},[params.id])


    return(
        <div className="van-detail">
            <Header/>
               { vanDetails ? (<div>
                    <img src={vanDetails.imageUrl} />
                    <p>{vanDetails.description}</p>
                </div>) : <h2>Loading...</h2>}
            <Footer/>
        </div>
    )
}

export default VanDetail