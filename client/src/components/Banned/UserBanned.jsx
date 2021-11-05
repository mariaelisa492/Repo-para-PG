import React from 'react'
import { NavLink } from 'react-router-dom'
import "./userBanned.css"

export const UserBanned = () => {
    return (

        <div className="bannedContainer">
            <h2 className="banned-title">You are BANNED!</h2>
            <div><img src="https://res.cloudinary.com/dbu76tbs6/image/upload/v1636060645/skullAndBones_cpaqau.png" alt="skull" className="banned-img"/></div>
        </div>
    )
}
