import React from "react";

const Child=({setIsLoggedIn})=>{


    const login=()=>{
        setIsLoggedIn(true);
    }

    return (
        <>
        <div>
            <label>Username:</label>
            <input type="text" placeholder="username" />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" placeholder="Password" />
        </div>

        <button onClick={login}>Login</button>
        </>
    )
}

export default Child