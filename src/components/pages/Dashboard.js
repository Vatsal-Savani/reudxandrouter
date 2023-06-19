import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersList } from '../../apis/userApis'
import Navbar from '../common/navbar/Navbar'
import "./Dashboard.css";

const Dashboard = () => {
    const dogImage = useSelector((state) => state.user.userList)
    const dispatch = useDispatch()

    console.log(dogImage)

    const changeTheImage = ()=>{
        fetchUsersList(dispatch)
    }
    return (
        <div>
            <Navbar/>
            <div className='dpImage'>
                <img src={dogImage} alt="" />
                <button onClick={changeTheImage}>Change Image</button>
            </div>
        </div>
    )
}

export default Dashboard;