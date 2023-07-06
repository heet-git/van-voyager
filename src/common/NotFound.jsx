import React from "react";
import { Link } from "react-router-dom";
function NotFound(){
return(
    <div className="page-not-found-container">
        <div className="page-not-found">
            <span className="not-found-error">404</span>
            <h1 className="not-found-title">Oops!</h1>
            <h2 className="not-found-msg">We can't seem to find the page you're looking for :(</h2>
            <Link to="/" className="go-home-btn">Go to Home</Link>
        </div>
    </div>
)
}

export default NotFound 