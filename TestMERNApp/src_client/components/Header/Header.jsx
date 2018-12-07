import React from 'react';
import {connect} from 'react-redux';

import logo from '../../logo.svg';
import {HOME_URL, ADMIN_URL, LOGIN_URL, LOGOUT_URL, CART_URL, PROFILE_URL, ACCOUNT_URL} from '../../assets/constant';

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
                            <li className="active"><a href="javascript:void(0);" onClick={()=> {this.props.history.push(HOME_URL);}}>Home</a></li>
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(ADMIN_URL);}}>Admin</a></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/">
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
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(CART_URL);}}><span className="glyphicon glyphicon-shopping-cart"></span><span className="badge">{this.props.cart.length}</span></a></li>
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(LOGIN_URL);}}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span><span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(PROFILE_URL);}}>Profile</a></li>
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(ACCOUNT_URL);}}>Account</a></li>
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push(LOGOUT_URL);}}>Logout</a></li>
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
