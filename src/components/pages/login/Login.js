import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const isLoggedIn = localStorage.getItem("isUser");

    let reg = /^[a-z]*@[a-z]{2,9}.[a-z]{2,4}/;
    let reg2 = /^[a-z A-Z][a-z A-Z 0-9 \W{0,3}]{8,20}/;

    const regEx = () => {
        let result = reg.test(email);
        let result2 = reg2.test(password);

        if (email && password && result && result2) {
            localStorage.setItem("isUser", true);
            navigate("/authroute");
        }
        else {
            if (!result || !result2) {
                alert("Enter Valid Emial-id and Password");
                setEmail("");
                setPassword("");
            }
        }
    }

    useEffect(() => {
        if (isLoggedIn) navigate("/authroute");
    }, [])

    if (!isLoggedIn) {
        return (
            <>
                <div className="maindiv">
                    <div><button className='homebtninlogin bttnn brdr txt-white' onClick={()=>navigate("/")}>Home</button></div>
                    <div className='minidiv'>
                        <h1 className='headinglogin txt-white'>Sign-in</h1>
                        <div><input className='mb-1 brdr mail txt-white' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                        <div><input className='mb-1 brdr pass txt-white' type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> </div>
                        <div><button className='bttnn brdr txt-white' onClick={regEx}>Sign-in</button></div>
                    </div>
                </div>
            </>
        )
    }
    }
    

export default Login