import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../../assets/logo/logo.png";
import "./Sidbar.css"

const Sidbar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-1 m-auto text-bg-dark w-100 h-100" > 
    <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto mt-2 text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span className="flex fs-4 text-center"><img className='w-50 h-50 m-auto' id="logo" src={Logo} alt="..." /></span>
    </NavLink>
    <div className='d-flex flex-column'>
      <h5 className='text-center text-light'>Admin NAME</h5>
    <Link to="/login" className='text-center text-light'>Logout</Link>
    </div>
      
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <NavLink to="statistic" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="orders" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="livreurs" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
            Livreurs
        </NavLink>
      </li>
      <li>
        <NavLink to="clients" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
          Clients
        </NavLink>
      </li>
      <li>
        <NavLink to="products" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
          Products
        </NavLink>
      </li>
    </ul>
    <hr/>
    <div>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="categories" className="nav-link text-white" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Categories
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="villes" className="nav-link text-white" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Villes
        </NavLink>
      </li>
    </ul>
    </div>

  </div>
  )
}

export default Sidbar