import  React, {Component} from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import SocialSignIn from './SocialSignIn';
import Error from '../../Error/Error';

import {login, register} from '../../../assets/util/fetch';
import {setLocalStorage} from '../../../assets/util/localStorage';

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
      console.log('success', success);
      setLocalStorage('token', success);
      this.setState({success});
    })
    .catch(error => {
      console.log('error', error);
      this.setState({error});
    });
  }
  signUp() {
    const {name, email, password} = this.state;
    this.setState({error:'', success:'' , warning: ''})
    //console.log('signUp()', name, email, password);
    register(name, email, password) 
    .then(success => {
      console.log('success', success);
      setLocalStorage('token', success); 
      this.setState({success});
    })
    .catch(error => {
      console.log('error', error);
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
        <Error warning={this.state.warning} error={this.state.error} success={this.state.success} />
        <hr/>
        <SocialSignIn />
        <br/>
        <p>By signing in, you agree to our <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>  
      </div>
    );
  }
}

export default SignInUp;

 