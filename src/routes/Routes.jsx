import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../layouts/Dashboard";
import AddHouse from "../pages/Dashboard/HouseOwner/AddHouse/AddHouse";
import HouseList from "../pages/Dashboard/HouseOwner/HouseList/HouseList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>

        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
    // dashboard route
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'addHouse',
          element:<AddHouse></AddHouse>
        },
        {
          path:'houseList',
          element:<HouseList></HouseList>
        }
      ],
    }
  ]);
  export default router;
  