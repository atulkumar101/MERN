import SignIn from '../components/Material-UI/SignIn';

const adminRoutes = [
    {
        path: "/admin",
        name: "Admin",
        //icon: "pe-7s-graph",
        component: SignIn
    },
    { 
        redirect: true, 
        path: "/", 
        to: "/admin", 
        name: "Admin" 
    }
];
export default adminRoutes;