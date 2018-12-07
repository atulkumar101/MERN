import UserDashboard from '../layouts/UserDashboard';
import AdminDashboard from '../layouts/AdminDashboard';

import {ADMIN_URL, DEFAULT_URL} from '../assets/constant';

const indexRoutes = [
    { 
        path: DEFAULT_URL, 
        name: "UserPage", 
        component: UserDashboard 
    }, 
    {
        path: ADMIN_URL, 
        name: "AdminPage", 
        component: AdminDashboard 
    }
];

export default indexRoutes;
