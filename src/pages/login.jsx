import React, { useState } from "react";


function Login(){
    const [loginData, setLoginData] = useState({email: "", password: ""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginData)
    }

    function handleChange(e){
        const {name, value} = e.target
        setLoginData(prev =>({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="login-page">
            <div className="login-container">
            <h1 className="login-heading">Sign in</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                />
                <button className="login-btn">Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login