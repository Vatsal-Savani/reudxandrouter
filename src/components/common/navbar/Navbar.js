import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const [status,setStatus] = useState();

    const isLoggedIn = localStorage.getItem("isUser");

    useEffect(()=>{
        if(isLoggedIn) {
            setStatus("Logout");
        }
        else {
            setStatus("Sign-In");
        }
        
    },[])
    
    const navigate = useNavigate();

    const navigateToLogin = ()=>{
        if(document.getElementById("login").innerText=="Sign-In") navigate("/authroute");
        else if(document.getElementById("login").innerText=="Logout") {
            localStorage.clear();
            document.getElementById("login").innerText="Sign-In";
            navigate("/");
        }
    }

    

  return (
    <>
        <div className="navbar">
            <div className="first" onClick={()=> navigate("/") }><h1><span style={{color : "#ff680f"}}>V</span>YAS</h1></div>
            <div className="second">
                <ul className='navul'>
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/mainlayout/about")}>About</li>
                    <li onClick={()=>navigate("/mainlayout/contact")}>Contact</li>
                    <li id='login' onClick={navigateToLogin} >{status}</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar