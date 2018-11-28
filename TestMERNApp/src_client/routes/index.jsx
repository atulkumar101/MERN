import UserDashboard from "../layouts/UserDashboard";
import AdminDashboard from "../layouts/AdminDashboard";

const indexRoutes = [
    { 
        path: "/", 
        name: "UserPage", 
        component: UserDashboard 
    }, 
    {
        path: "/admin", 
        name: "AdminPage", 
        component: AdminDashboard 
    }
];

export default indexRoutes;
