import React, { useState } from "react";
import Child from "./Child";

const Parent =()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    return(
        <>
        <h1>Parent Component</h1>
            {
                isLoggedIn ? <p>You are logged in!</p> : <Child setIsLoggedIn={setIsLoggedIn}/>
            }
        </>
    )
}

export default Parent