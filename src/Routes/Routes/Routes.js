import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from './../../Pages/Home/Home';
import Login from './../../Pages/Home/Login/Login';
import Blogs from './../../Pages/Home/Blogs';
import MyProducts from './../../Pages/MyProducts/MyProducts';
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProducts from "../../Pages/MyProducts/AddProducts/AddProducts";
import DashboardLayout from "../../layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import Error from "../Error";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import AdminRoute from "./AdminRoute/AdminRoute";
import MyProduct from "../../Pages/MyProducts/MyProduct";
import SellerRoute from './SellerRoute/SellerRoute';
import Report from "../../Pages/Dashboard/Report/Report";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
         
            {
                path: '/category/:id',
                element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                // loader: ({params}) => fetch(`https://used-product-resale-market-server.vercel.app/categories/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
           
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                   {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
                   },
                   {
                    path: '/dashboard/allusers',
                    element: <AdminRoute><Allusers></Allusers></AdminRoute>
                   },
                   {
                    path: '/dashboard/report',
                    element: <AdminRoute><Report></Report></AdminRoute>
                   },
                   {
                    path: '/dashboard/sellers',
                    element: <AdminRoute><Sellers></Sellers></AdminRoute>
                   },
                   {
                    path:'/dashboard/addProduct',
                    element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
                },
                {
                    path:'/dashboard/myProduct',
                    element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
                },
                  
                ]
            } 
        ]
       
    }
])

export default router;