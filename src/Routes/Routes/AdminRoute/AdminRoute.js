import { info } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';
import useAdmin from './../../../hooks/useAdmin';
import Loading from './../../../Pages/Home/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    const location =useLocation();

if(loading || isAdminLoading){
    return <Loading></Loading>
}

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default AdminRoute;