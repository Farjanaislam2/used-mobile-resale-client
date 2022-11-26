import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { Authcontext } from './../context/Authprovider';

const DashboardLayout = () => {
  const {user} = useContext(Authcontext)
  const [isAdmin]= useAdmin(user?.email)
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to='/dashboard'>My Orders</Link></li>
     {
      isAdmin && <>
       <li><Link to='/dashboard/allusers'>Users</Link></li>
       <li><Link to='/dashboard/sellers'>Sellers</Link></li>
      </>
     }
     
      
    </ul>
  </div>
</div>
           
        </div>
    );
};

export default DashboardLayout;