import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/logo/logo.png";
import "./Sidbar.css"

const Sidbar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-100 h-100" > 
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto m-auto text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span className="fs-4"><img id="logo" src={Logo} alt="..." /></span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <Link to="statistique" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="livreurs" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
            Livreurs
        </Link>
      </li>
      <li>
        <Link to="orders" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
          Clients
        </Link>
      </li>
      <li>
        <Link to="products" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
          Products
        </Link>
      </li>
    </ul>
    <hr/>
    <div>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="categories" className="nav-link text-white" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Categories
        </Link>
      </li>
      <li className="nav-item">
        <Link to="villes" className="nav-link text-white" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Villes
        </Link>
      </li>
    </ul>
    </div>

  </div>
  )
}

export default Sidbar