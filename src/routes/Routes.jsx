import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../layouts/Dashboard";
import AddHouse from "../pages/Dashboard/HouseOwner/AddHouse/AddHouse";
import HouseList from "../pages/Dashboard/HouseOwner/HouseList/HouseList";
import PrivateRoute from "./PrivateRoute";
import DisplayHouse from "../pages/Home/DisplayHouses/DisplayHouse";
import SelectedHouses from "../pages/Dashboard/HouseRenter/SelectedHouse/SelectedHouses";
import ManageHouses from "../pages/Dashboard/HouseRenter/SelectedHouse/ManageHouses";

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
        },
        {
          path:'displayHouses',
          element:<DisplayHouse></DisplayHouse>
        },
      ]
    },
    // dashboard route
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'addHouse',
          element:<PrivateRoute><AddHouse></AddHouse></PrivateRoute>
        },
        {
          path:'houseList',
          element:<PrivateRoute><HouseList></HouseList></PrivateRoute>
        },
        {
          path:'selectedHouses',
          element:<PrivateRoute><SelectedHouses></SelectedHouses></PrivateRoute>
        },
        {
          path:'manageHouses',
          element:<PrivateRoute><ManageHouses></ManageHouses></PrivateRoute>
        }
       
      ],
    }
  ]);
  export default router;
  