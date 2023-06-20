import React from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import background from "../assets/home-img.jpg"


function Home(){

    const backgroundImg = background

    return (
    <div className="home">
        <Header />
            <div className="home-section">
                <img src={backgroundImg} className="home-img" alt="VW van in garage"></img>
                <div className="home-intro">
                    <h1 className="intro-title">You got the travel plans, we got the travel vans.</h1>
                    <p className="intro-detail">Add adventure to your life by joining the</p> 
                    <p className="intro-detail"> <span>#vanvoyager</span> movement.</p>
                    <p className="intro-detail">Rent the perfect van to make your perfect road trip.</p>
                    <button type="button"className="find-btn">Find your van</button>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default Home