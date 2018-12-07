import Admin from '../components/Material-UI/Login/SignIn';

import {ADMIN_URL, DEFAULT_URL} from '../assets/constant';

const adminRoutes = [
    {
        path: ADMIN_URL,
        name: "Admin",
        //icon: "pe-7s-graph",
        component: Admin
    },
    { 
        redirect: true, 
        path: DEFAULT_URL, 
        to: ADMIN_URL, 
        name: "Admin" 
    }
];

export default adminRoutes;