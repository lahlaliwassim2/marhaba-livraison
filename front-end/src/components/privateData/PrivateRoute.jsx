// import  { Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
//Routing
const PrivateRoute = ({children}) => {
  if(!localStorage.getItem('isConnected')) {
    return <Navigate to="/login" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoute