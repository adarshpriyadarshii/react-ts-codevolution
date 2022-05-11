import { useState } from "react"

type AuthUser={
    name:string,
    email:string
}
export const User=()=>{
    const [user,setUser]=useState<null | AuthUser>(null)
    const handleLogin=()=>{
        setUser({
            name:"Adarsh",
            email:"adarsh@abc.com"
        })
    }
    const handleLogout=()=>{setUser({
        name:"N/A",
        email:"N/A"
    })}
    return (
        <div>
            <button onClick={handleLogin}>Login!</button>
            <button onClick={handleLogout}>Logout!</button>
            <div>
                User name is {user?.name}
            </div>
            <div>
                User email is {user?.email}
            </div>
        </div>
    )
}