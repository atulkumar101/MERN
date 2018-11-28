import Profile from "../components/User/Profile";
import Account from "../components/User/Account";
import SignInUp from "../components/User/SignIn";
import SignOut from "../components/User/SignOut";
import Checkout from '../components/Material-UI/Checkout';
import ProductDetail from "../components/Product/ProductDetail";

import Home from "../views/Home";

import Admin from "../components/Material-UI/SignIn";

const userRoutes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/product/:id",
        name: "Product",
        component: ProductDetail
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/account",
        name: "Account",
        component: Account
    },
    {
        path: "/cart",
        name: "Cart",
        component: Checkout
    },
    {
        path: "/login",
        name: "Login",
        component: SignInUp
    },
    {
        path: "/logout",
        name: "Logout",
        component: SignOut
    },
    {
        path: "/admin", 
        name: "Admin", 
        component: Admin
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