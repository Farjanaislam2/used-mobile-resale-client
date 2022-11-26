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
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
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
                    element: <Allusers></Allusers>
                   },
                   {
                    path: '/dashboard/sellers',
                    element: <Sellers></Sellers>
                   },
                ]
            } 
        ]
       
    }
])

export default router;