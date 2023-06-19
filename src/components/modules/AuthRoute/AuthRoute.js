import React from 'react'
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
    let isLoggedIn = localStorage.getItem("isUser");
    if(isLoggedIn)return <>{children}</>
    return <Navigate to="/login"/>
}

export default AuthRoute