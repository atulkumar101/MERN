import React from 'react';
import {firebaseApp} from '../../firebase.js';
import {Redirect, Link } from 'react-router-dom';
import '../main.css';
import {setAppCookie} from './auth.js';
import {setLogin} from '../Actions';
import { connect } from "react-redux";


console.log('outside sign in');


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:{
                message:''
            },
           
        };

    }


    signIn(){
        
        const {email,password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user=userCredentials.user;
            if (!user) {
                return;
            } 
            // user is logged in
            // console.log('user is',user);
            // console.log('props',this.props);
            // let p=new Promise((a,b)=>{
            //     console.log('inside promise');
                
            //     setAppCookie();
            //     a();
            //     console.log('after setting cookies');
                 
            // });
            // p.then((a)=>{
            //     console.log('a',a);
                
            //     this.props.statusHandler('true');
            //     console.log('Pushing to dashboard');
            //     this.props.this.history.push('/Dashboard');
                               
            // }).catch((b)=>{
            //     console.log('error',b);
                
            // });
            //console.log(setAppCookie());
            console.log(this.props);
            
                setAppCookie().then(()=>{
                console.log('this.history',this.props.history);
                this.props.setLogin(true);
                console.log('status after change',this.props.history)
                this.props.history.push('/Dashboard');
                
            }).catch((err)=>{console.log('Promise Error',err);
            });
            //  console.log('result',result);
            
            // setAppCookie(this.props); 
            // console.log(this.props.this.history.length)           
        })
        .catch(error => {
        this.setState({error});
        });
        console.log('Signing In');
       
//        console.log('status',this.state.status);
       // setTimeout(()=>{ this.props.this.history.push('/Dashboard');console.log('this.history length',this.props.this.history.location);},2000);
        
        
    }



    render(){
        // console.log('inside signin ');
        
        return(
            <div className="form-inline form-contain" >


                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Email"
                        type="text"  
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <button
                        className="btn btn-success"
                        onClick={() => this.signIn()}>
                        Sign In
                    </button>
                    {/* <div><Link to={'/resetpassword'}>Forgot Your Password?</Link></div> */}
                    <div><Link to={'/signup'}>Sign Up Instead</Link></div>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        );
    }
    
}
function  mapStateToProps(state) {
    return {
        isLogin:state.login
    }
}
export default connect(mapStateToProps,{setLogin})(SignIn);