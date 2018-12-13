import React from 'react';
import {connect} from 'react-redux';

import logo from '../../logo.svg';
import {HOME_URL, ADMIN_URL, LOGIN_URL, LOGOUT_URL, CART_URL, PROFILE_URL, ACCOUNT_URL} from '../../assets/constant';

import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
           <div> 
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="javascript:void(0);"><img src={logo} className="logo" alt="logo" /></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><NavLink exact to={HOME_URL} activeClassName="active">Home</NavLink></li>
                            <li><NavLink exact to={ADMIN_URL} activeClassName="active">Admin</NavLink></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="javascript:void(0)">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink exact to={CART_URL} activeClassName="active"><span className="glyphicon glyphicon-shopping-cart"></span><span className="badge">{this.props.cart.length}</span></NavLink></li>
                            <li><NavLink exact to={LOGIN_URL} activeClassName="active"><span className="glyphicon glyphicon-log-in"></span></NavLink></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span><span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink exact to={PROFILE_URL} activeClassName="active">Profile</NavLink></li>
                                    <li><NavLink exact to={ACCOUNT_URL} activeClassName="active">Account</NavLink></li>
                                    <li><NavLink exact to={LOGOUT_URL} activeClassName="active">LogOut</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
           </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        cart: state.cart.products
    });
}

export default connect(mapStateToProps)(Header);
/*
<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Header</h1>
    </header>
    <p className="App-intro">
    </p>
</div>
*/
