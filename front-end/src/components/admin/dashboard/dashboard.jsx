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
      <div className='outlet-container d-flex flex-column m-auto '>
       <Outlet />
      </div>

    </div>
  )
}

export default Dashboard