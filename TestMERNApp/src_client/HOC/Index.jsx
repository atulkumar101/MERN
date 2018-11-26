import React from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';
import {signInUser, signUpUser} from '../actionCreators'
import authenticate from './authenticate';

const SignUpForm = authenticate(SignUp);
const SignInForm = authenticate(SignIn);


class Authentication extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      userAccess: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
 
  toggleForm() {
    this.setState({
      userAccess: !this.state.userAccess
    });
  }

  render() {
    const { signInUser, signUpUser } = this.props;
    return (
      <div className="form-div">
        {
          this.state.userAccess ?
          (
            <SignInForm
              onSubmit={signInUser}
              showSignup={this.toggleForm}
            />
          ) :
          (
            <SignUpForm
              onSubmit={signUpUser}
              showSignIn={this.toggleForm}
            />
          )
        }
      </div>
    );
  }
}


export default connect(
 null, 
 {signUpUser, signInUser}
)( Authentication);