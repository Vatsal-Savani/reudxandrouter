import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/common/navbar/Navbar'

const Mainlayout = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet/>
            </div>
        </>


    )
}

export default Mainlayout