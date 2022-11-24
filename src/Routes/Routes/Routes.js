import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from './../../Pages/Home/Home';
import Login from './../../Pages/Home/Login/Login';
import Blogs from './../../Pages/Home/Blogs';
import MyProducts from './../../Pages/MyProducts/MyProducts';

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myProduct/:id',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;