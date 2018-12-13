import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import PropTypes from "prop-types";

import {Header, ErrorBoundary, Footer} from '../components';

import userRoutes from '../routes/user';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ErrorBoundary>
        <Header {...this.props} />
        <ErrorBoundary>
          <Switch>
            
            {userRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}

          </Switch>
        </ErrorBoundary>
        <Footer {...this.props} />
      </ ErrorBoundary>
    );
  }
}
/*
Dashboard.defaultProps = {
  login: 'false'
};
*/

export default UserDashboard;
