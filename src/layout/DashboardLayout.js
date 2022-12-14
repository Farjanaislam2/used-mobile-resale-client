import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { Authcontext } from './../context/Authprovider';
import useSeller from './../hooks/useSeller';


const DashboardLayout = () => {
  const {user} = useContext(Authcontext)
  const [isAdmin]= useAdmin(user?.email)
  const [isSeller]= useSeller(user?.email)
// const [seller, setSeller]= useState(false)

  // useEffect( ()=>{
   
  //       fetch(`https://used-product-resale-market-server.vercel.app/users/sellers/${user.email}`)
  //       .then(res =>res.json())
  //       .then(data =>{
  //           setSeller(data.isSeller)
  //       })
  //   }
  //       ,[user.email])


  //       console.log(seller)
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 text-base-content">
    
      <li><Link to='/dashboard'>My Orders</Link></li>
     {
      isAdmin && <>
       <li><Link to='/dashboard/allusers'>Users</Link></li>
       <li><Link to='/dashboard/sellers'>Sellers</Link></li>
       <li><Link to='/dashboard/report'>Reported Items</Link></li>
     
      </>
     }

     {
      isSeller && <>
        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
        <li><Link to='/dashboard/myProduct'>My Product</Link></li>
      </>
     }
     
      
      
      
    </ul>
  </div>
</div>
           
        </div>
    );
};

export default DashboardLayout;