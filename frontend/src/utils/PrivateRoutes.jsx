import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

const PrivateRoutes = () => {
    const { authUser } = useAuthContext();
   
    return(
        authUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes