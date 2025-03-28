import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
const PrivateRoute=() =>{
    const {loggedIn,checkingStatus}=useAuthStatus()

    if(checkingStatus){
        return <div>Loading...</div>
    }
  return loggedIn ? <Outlet />:<Navigate to='/login' />
}


export default PrivateRoute