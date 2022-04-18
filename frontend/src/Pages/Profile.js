import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
function Profile() {
    let {username} = useParams();
    let navigate = useNavigate();
    return (
        <>
        <div>Profile</div>
        <h1>Hello {username}</h1>
        </>
    )
}

export default Profile