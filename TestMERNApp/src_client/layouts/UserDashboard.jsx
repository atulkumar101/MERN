import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
    
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Footer/Contact";
import Social from "../components/Footer/Social";
import Map from "../components/Footer/Map";

import userRoutes from "../routes/user";
/*
import Loadable from 'react-loadable';
import Loading from './Loading.jsx';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home.jsx'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});
*/
class UserDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          
          {userRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}

        </Switch>
        {/*<Footer {...this.props} />*/}
        <div className="footer">
          <div className="container">
            <span className="skype-button bubble" data-contact-id="live:sarvesh.singh18">
            </span>
            <div className="w3-center">
              {/*
                  <h4 className="heading"><strong>LET'S KEEP CODING</strong><h4>
                  <h4 className="heading"><strong>We'd love to hear from you</strong><h4>
                  <h4 className="heading"><strong>GET IN TOUCH</strong><h4> 
              */}
            </div>
            {/*
              <img className="footer_img" src="footerfinal.png" alt="footer" title="Contact Us" />
            */}
            <div className="footer_info">
                <Contact />
                <Social />
                <Map />
            </div>

            <div className="w3-center">
                <h4 className="heading"><strong>Copyright &copy; 2018. All Rights Reserved.</strong></h4>
                {/*Developed & Maintained by*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
Dashboard.defaultProps = {
  login: 'false'
};
*/
export default UserDashboard;
