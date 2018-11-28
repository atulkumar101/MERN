import Admin from '../components/Material-UI/SignIn';

const adminRoutes = [
    {
        path: "/admin",
        name: "Admin",
        //icon: "pe-7s-graph",
        component: Admin
    },
    { 
        redirect: true, 
        path: "/", 
        to: "/admin", 
        name: "Admin" 
    }
];
export default adminRoutes;