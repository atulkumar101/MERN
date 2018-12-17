import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  import {fakeAuth} from './fakeAuth';
  

class PrivateRoute extends React.Component {
    render() {
        const {component, ...rest} = this.props;

        console.log(this.props);
        return(
            <React.Fragment>
                <Route {...rest} render={props => fakeAuth.isAuthenticated 
                    ? (<component {...props} />) 
                    : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />) 
                } />
            </React.Fragment>
        )
    }
}

export default PrivateRoute;