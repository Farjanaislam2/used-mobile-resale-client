import Main from "../../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from './../../Pages/Home/Home';
import Login from './../../Pages/Home/Login/Login';

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
            }
        ]
    }
])

export default router;