import  React, {Component} from 'react';
import "../assets/style/style.css";

import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
//import {Link} from 'react-router-dom';

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.inpEmail = React.createRef();
    this.inpPass = React.createRef();
  }

  signOut() {
      console.log('signOut()');
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
  }

  signIn() {
    //event.preventDefault();

    const {email,password} = this.state;
    console.log('signin()');
    console.log('',this.inpEmail,'',this.inpEmail.current);
    this.inpEmail.current.focus();
    //this.inpPass.current.focus();
  }
  signUp() {
    const {email,password} = this.state;
    console.log('signup()');
  }

  render() {
    return (
      <div className="sign_container">
        <a href="#" onClick={()=> this.signOut()}>Sign out</a>
		    <div className="box">
          <ul className="nav nav-tabs">
            <li style={{width:"50%"}}><a data-toggle="tab" href="#signup">Sign Up</a></li>
            <li style={{width:"50%"}} className="active"><a data-toggle="tab" href="#signin">Sign In</a></li>
          </ul>

          <SignIn />
          <SignUp />

          {
            //<Link to={'/sign'}>Instead</Link>
          }
          <div>{this.state.error}</div>
        </div>
      </div>
    );
  }
}

export default Sign;
