import React from "react";
import img from "../assets/about-img.jpg"

function About(){
    const background = img
    return(
        <div className="about-container">
            <main>
                <img src={background} className="about-img" alt=""/>
                <div className="about-info">
                    <h2 className="about-heading">Our Story</h2>
                    <p>
                        #VanVoyager was born out of a shared love for exploration and a desire to redefine travel. We believe that the journey itself is just as important as the destination. It's about the freedom to wander, the thrill of discovery, and the connections made along the way.
                    </p>

                    <h2>Embrace the Journey</h2>
                    <p>
                        Unleash your wanderlust and embark on extraordinary adventures with VanVoyager. We are not just another van rental service - we are your ultimate travel companion, here to fuel your wildest dreams and make every moment on the road an unforgettable experience.
                    </p>

                    <h2>Let's Create Memories</h2>
                    <p>
                        Join us in celebrating the art of exploration, the joy of discovery, and the connections we make on the road. Your journey starts here - where every mile is a canvas and every destination is a masterpiece waiting to be discovered.
                    </p>
                    <p>
                        Contact us today to unlock a world of adventure and embark on an extraordinary journey with VanVoyager.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default About