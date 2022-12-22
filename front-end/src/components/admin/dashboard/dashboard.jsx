import React from 'react';
import Sidbar from '../Sidbar/Sidbar'
import { Outlet } from 'react-router-dom';
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='d-flex flex-row'>
      <div className='sidebar-container ' >
        <Sidbar />
      </div>
      <div className='outlet-container-box d-flex mx-auto border-success mt-2'>
       <Outlet />
      </div>

    </div>
  )
}

export default Dashboard