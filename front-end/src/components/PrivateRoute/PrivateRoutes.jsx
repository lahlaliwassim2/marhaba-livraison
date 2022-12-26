import {Outlet , Navigate} from 'react-router-dom'
export default function PrivateRoutes(params) {
    return(
        localStorage.getItem('token') ? <Outlet/> : <Navigate to='login'/>
    )
} 