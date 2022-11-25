import { info } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location =useLocation();

if(loading){
    return <progress className="progress w-56"></progress>
}

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;