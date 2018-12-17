import React from 'react';
import {
  Redirect
} from "react-router-dom";

import {fakeAuth} from './fakeAuth';

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true});
    });
  };
  render() {
    let { from } = this.props.location.state ||  { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    console.log(from, redirectToReferrer);
    if(redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login
