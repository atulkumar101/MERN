import Profile from "../components/User/Profile";
import Account from "../components/User/Account";
import SignInUp from "../components/User/SignIn";
import SignOut from "../components/User/SignOut";
import Checkout from '../components/Material-UI/Checkout';
import ProductDetail from "../components/Product/ProductDetail";

import Home from "../views/Home";
import AdminDashboard from '../layouts/AdminDashboard';

const userRoutes = [
    {
        path: "/home",
        name: "Home",
        //icon: "pe-7s-graph",
        component: Home
    },
    {
        path: "/product/:id",
        name: "Product",
        //icon: "pe-7s-graph",
        component: ProductDetail
    },
    {
        path: "/profile",
        name: "Profile",
        //icon: "pe-7s-graph",
        component: Profile
    },
    {
        path: "/account",
        name: "Account",
        //icon: "pe-7s-graph",
        component: Account
    },
    {
        path: "/cart",
        name: "Cart",
        //icon: "pe-7s-graph",
        component: Checkout
    },
    {
        path: "/login",
        name: "Login",
        //icon: "pe-7s-graph",
        component: SignInUp
    },
    {
        path: "/logout",
        name: "Logout",
        //icon: "pe-7s-graph",
        component: SignOut
    },
    {
        path: "/admin",
        name: "AdminPage",
        //icon: "pe-7s-graph",
        component: AdminDashboard
    },
    { 
        redirect: true, 
        path: "/", 
        to: "/home", 
        name: "Home" 
    }
];

export default userRoutes;
             /*
                    <Route exact path="/" render={() => (
                        this.isUserLoggedIn() ? (
                                                    <Home />
                                                ) : (
                                                    <Redirect to="/signin" />
                                                )
                    )}/>

                    <Route exact path="/signin" render={() => (
                        this.isUserLoggedIn() ? (
                                                    <Redirect to="/" />
                                                ) : (
                                                    <Signin />
                                                )
                    )}/>

                    <Route exact path="/signup" render={() => (
                        this.isUserLoggedIn() ? (
                                                    <Redirect to="/" />
                                                ) : (
                                                    <Signup />
                                                )
                    )}/>
            
                */