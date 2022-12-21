import React from 'react'
import { Link } from 'react-router-dom'

const Sidbar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-25 h-100" > 
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span className="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="#" className="nav-link active" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          Orders
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
          Products
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
          Customers
        </Link>
      </li>
    </ul>
    <hr/>

  </div>
  )
}

export default Sidbar