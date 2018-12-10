import React from 'react';
import {firebaseApp} from '../../firebase.js';
//import {connect} from 'react-redux';
import {Link} from 'react-router';
import {unsetAppCookie} from './auth.js';
import {setLogin} from '../Actions';
import { connect } from "react-redux";


class Dashboard extends React.Component{
    signOut(){
        console.log('SignOut');
        unsetAppCookie();
        console.log('cookies unset Done!!');
        // window.location.reload();
        firebaseApp.auth().signOut();
        this.props.setLogin(false);
        this.props.history.push('/SignIn');
    }
    render(){
        return(
            <div className="container" >
                <div className="profile">
                <h3>Profile</h3>
                </div>
                    Welcome 
                    <hr/>
                    login:::{console.log(this.props.isLogin)
                    }
                    <button className="btn btn-danger"
                     onClick={() =>  this.signOut()}
                      >
                    Sign Out
                </button>
            <div>
                {/* Signed In User is:{this.props.signInData.email} */}
            </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        isLogin:state.login    }
}
export default connect(mapStateToProps,{setLogin})(Dashboard);