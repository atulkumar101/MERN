import Profile from '../components/User/Detail/Profile';
import Account from '../components/User/Detail/Account';
import SignInUp from '../components/User/Login/SignInUp';
import SignOut from '../components/User/Login/SignOut';
import ProductDetail from '../components/Product/ProductDetail';

import Admin from '../components/Material-UI/Login/SignIn';
import Checkout from '../components/Material-UI/Checkout/Checkout';

import Home from '../views/Home';

import {HOME_URL, ADMIN_URL, PRODUCT_URL, CART_URL, PROFILE_URL, ACCOUNT_URL, LOGIN_URL, LOGOUT_URL, DEFAULT_URL} from '../assets/constant';

const userRoutes = [
    {
        auth: false,
        name: "Home",
        path: HOME_URL,
        component: Home,
    },
    {
        auth: false,
        name: "Admin", 
        path: ADMIN_URL, 
        component: Admin
    },
    {
        auth: false,
        name: "Product",
        path: PRODUCT_URL,
        component: ProductDetail
    },
    {   
        auth: false,
        name: "Cart",
        path: CART_URL,
        component: Checkout,
    },
    {
        auth: true,
        name: "Profile",
        path: PROFILE_URL,
        component: Profile
    },
    {
        auth: true,
        name: "Account",
        path: ACCOUNT_URL,
        component: Account
    },
    {
        auth: false,
        name: "Login",
        path: LOGIN_URL,
        component: SignInUp
    },
    {
        auth: true,
        name: "Logout",
        path: LOGOUT_URL,
        component: SignOut
    },
    { 
        redirect: true, 
        path: DEFAULT_URL, 
        to: HOME_URL,  
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