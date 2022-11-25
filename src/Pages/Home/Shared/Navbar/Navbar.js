import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from './../../../../context/Authprovider';

const Navbar = () => {
  const {user,logOut} = useContext(Authcontext);

  const handleLogOut  =() =>{
    logOut()
    .then(()=> {})
    .catch(err => console.log(err));
  }
  const menuItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/addProduct'>Add a Product</Link>
      </li>
      <li>
        <Link to='/myProduct'>My Products</Link>
      </li>
      
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li>
        <Link to='/myOrders'>My orders</Link>
      </li>
   
      {
        user?.uid ? 
      <>
        <li>
        <button onClick={handleLogOut}>Sign out</button>
        
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      </>
      
      :
      <li>
        <Link to='/login'>Login</Link>
        
      </li>
        
      
      }
     
    </>
  );

  return (
    <div className="navbar bg-green-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl text-green-700 font-bold">Used Product Resale Market</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
         {menuItems}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      
    </div>
  );
};

export default Navbar;
