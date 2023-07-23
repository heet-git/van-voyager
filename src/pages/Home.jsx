import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return (
        <div className="home-container">
            <div className="home-intro">
                <h1 className="intro-title">You got the travel plans, we got the travel vans.</h1>
                <p className="intro-detail">Add adventure to your life by joining the <span className="hash-tag">#vanvoyager</span> movement.</p>
                <p className="intro-detail">Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans">Find your van</Link>
            </div>
        </div>
    )
}

export default Home