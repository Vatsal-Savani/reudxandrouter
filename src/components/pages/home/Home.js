import React, { useEffect } from 'react'
import Navbar from '../../common/navbar/Navbar';
import "./Home.css";
import ad from "../../../images/ad.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {

    // this is to prevent to naviagte to home from dashhboard after logged-in...................................
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isUser");

    useEffect(()=>{
        if(isLoggedIn) navigate("/authroute");
    },[])



  return (
    <>
        <Navbar/>
        <div className='showbar'>
            <p className='bigp'>You can Watch</p>
            <p className='bigp'>Beautiful Dogs and cute puppies Here</p>
            <p className='downtxt'>there are many pictures, and all are free to watch </p>
            <p className='downtxt'>you just need to sign-up</p>
        </div>
        <div className='details'>
            <p>
                <img src={ad} alt="" />
            </p>
        </div>
        <footer>
            <h5 className="footer"><i>&#169; copyright Disclaimer, All Rights are reserved by the <strong><span style={{color : "#ff680f", cursor : 'pointer'}}>V</span>YAS</strong> pictures and photography laboratory.</i></h5>
        </footer>
    </>
  )
}

export default Home