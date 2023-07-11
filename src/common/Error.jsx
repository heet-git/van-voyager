import React from "react";
import { useRouteError } from "react-router-dom";

function Error(){
    const errorMsg = useRouteError()
    return (
        <div className="error">
            <h3>{errorMsg.message}</h3>
            <pre>{errorMsg.status} - {errorMsg.statusText}</pre>
        </div>
    )
}

export default Error