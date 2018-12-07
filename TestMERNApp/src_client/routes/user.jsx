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
        path: HOME_URL,
        name: "Home",
        component: Home
    },
    {
        path: ADMIN_URL, 
        name: "Admin", 
        component: Admin
    },
    {
        path: PRODUCT_URL,
        name: "Product",
        component: ProductDetail
    },
    {
        path: CART_URL,
        name: "Cart",
        component: Checkout
    },
    {
        path: PROFILE_URL,
        name: "Profile",
        component: Profile
    },
    {
        path: ACCOUNT_URL,
        name: "Account",
        component: Account
    },
    {
        path: LOGIN_URL,
        name: "Login",
        component: SignInUp
    },
    {
        path: LOGOUT_URL,
        name: "Logout",
        component: SignOut
    },
    { 
        redirect: true, 
        path: DEFAULT_URL, 
        to: HOME_URL, 
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