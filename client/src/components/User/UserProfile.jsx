import React from "react";
import {useAuth0} from '@auth0/auth0-react'

export function UserProfile(){
    const {user, isAuthenticated, isLoading} = useAuth0()

    if(isLoading){
        return(
            <p>LOADING...</p>
        )}
    
    if(isAuthenticated){
        return (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>Name: {user.nickname}</h2>
                <p>Email: {user.email}</p>
            </div>
    )
}
}