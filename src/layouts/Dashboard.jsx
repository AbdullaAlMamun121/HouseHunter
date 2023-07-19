import {   useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useOwner from "../hooks/useOwner";
import useAllUsers from "../hooks/useAllUsers";
import { AuthContext } from "../providers/AuthProvider";



const Dashboard = () => {

    const [userRole, setUserRole] = useState([]);
    const [isUsers] = useAllUsers();
    // const { user, loading } = useAuth();
    const {user,loading} = useContext(AuthContext);
 
    useEffect(() => {
        if (!loading && isUsers && isUsers.length > 0) {
            const loggedInUserRole = isUsers.find(u => u.email === user?.email)?.role;
            setUserRole(loggedInUserRole ? [loggedInUserRole] : []);
        }
    }, [loading, isUsers, user]);


    const [isOwner] = useOwner();
    // const [isReenter] = useRenter();


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hiddenz">Open SideBar</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {isOwner ?
                            <>
                                <kbd className="kbd kbd-lg">Role: {userRole[0]}</kbd>
                                <ul>
                                    <li><Link to="/dashboard/addHouse">Add House</Link></li>
                                    <li><Link to="/dashboard/houseList">List of Houses</Link></li>
                                    <li><Link to="/">Home Page</Link></li>
                                </ul>
                            </>
                            :
                            <>

                                <kbd className="kbd kbd-lg">Role:{userRole[0]}</kbd>
                                <ul>
                                    <li><Link to="/dashboard/selectedHouses">Selected House</Link></li>
                                    <li><Link to="/dashboard/manageHouses">Manage Houses</Link></li>
                                    <li><Link to="/">Go Home</Link></li>
                                </ul>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;