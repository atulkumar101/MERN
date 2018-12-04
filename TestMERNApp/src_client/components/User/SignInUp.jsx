import  React, {Component} from 'react';
import "../../assets/style/style.css";

import SignIn from './SignIn';
import SignUp from './SignUp';
//import {Link} from 'react-router-dom';

import {login, register} from '../../assets/utils/fetch';
import {setLocalStorage, getLocalStorage} from '../../assets/utils/cookie';


class SignInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      success: '',
      warning: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    //this.inpEmail = React.createRef();

  }

  onInputChange(event) {
    event.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  }

  signIn() {
    /*
    this.inpEmail.current.focus();
    this.props.history.push('/');
    */
    const {email, password} = this.state;
    this.setState({error:'', success:'' , warning: ''})
    //console.log('signIn()', email, password);
    login(email, password) 
    .then(success => {
      setLocalStorage(success);
      this.setState({success});
    })
    .catch(error => {
      //console.log(error);
      this.setState({error});
    });
  }
  signUp() {
    const {name, email, password} = this.state;
    this.setState({error:'', success:'' , warning: ''})
    //console.log('signUp()', name, email, password);
    register(name, email, password) 
    .then(success => {
      setLocalStorage(success); 
      this.setState({success});
    })
    .catch(error => {
      //console.log(error);
      this.setState({error});
    });
  }

  render() {
    return (  
      <div className="sign_card">
        <ul className="nav nav-tabs">
          <li style={{width:"50%"}}><a data-toggle="tab" href="#signup">Sign Up</a></li>
          <li style={{width:"50%"}} className="active"><a data-toggle="tab" href="#signin">Sign In</a></li>
        </ul>
        
        <div className="container tab-content">
          <SignIn onInputChange={this.onInputChange} signIn={this.signIn} />
          <SignUp onInputChange={this.onInputChange} signUp={this.signUp} /> 
        </div>
        {
            //has-success has feedback
            //has-success
            //<span className="glyphicon glyphicon-ok form-control-feedback"></span>
            //has-warning
            //<span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>
            //has-error
            //<span className="glyphicon glyphicon-remove form-control-feedback"></span>
        }
        {
          this.state.warning 
          ? (<div class="alert alert-warning alert-dismissible fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {console.log('warning',this.state.warning)}
            <strong>{this.state.warning}</strong> 
          </div>) 
          : ''
        }
        {
          this.state.error 
          ? (<div class="alert alert-danger alert-dismissible fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {console.log('success err',this.state.error)}
            <strong>{this.state.error}</strong> 
          </div>) 
          : ''
        }
        {
          this.state.success 
          ? (<div class="alert alert-success alert-dismissible fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {console.log('success',this.state.success)}
            <strong>{this.state.success}</strong> 
          </div>) 
          : ''
        }
        <hr/>
        <p>Or connect with:</p>
        <button type="button" className="btn btn-default"
            onClick={() => this.sign()}>Facebook</button>
        <button type="button" className="btn btn-success"
            onClick={() => this.sign()}>Github</button>
        <button type="button" className="btn btn-danger"
            onClick={() => this.sign()}>LinkedIn</button>

        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        
        <br/>
        <p>By signing in, you agree to our <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
        {
          //<a href="#" onClick={()=> this.signOut()}>Sign out</a>
          //<Link to={'/sign'}>Instead</Link>
        } 
      </div>
    );
  }
}

export default SignInUp;
