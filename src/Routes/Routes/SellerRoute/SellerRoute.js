
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';
import Loading from './../../../Pages/Home/Shared/Loading/Loading';
import useSeller from './../../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const [isSeller,isAdminLoading] = useSeller(user?.email);
    const location =useLocation();

if(loading || isAdminLoading){
    return <Loading></Loading>
}

    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default SellerRoute;