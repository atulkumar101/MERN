import React from 'react';
import '../../assets/style/style.css';
import '../../assets/style/index.css';

import logo from '../../logo.svg';

class Header extends React.Component {
    render() {
        return(
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
           <div> 
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="javascript:void(0);">XYZWebSite</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/home');}}>Home</a></li>
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/admin');}}>Admin</a></li>
                        </ul>
                        <form class="navbar-form navbar-left" action="/">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" name="search" />
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit">
                                        <i class="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/cart');}}><span class="glyphicon glyphicon-shopping-cart"></span><span class="badge">5</span></a><br/></li>
                            <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/login');}}><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/profile');}}>Profile</a></li>
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/account');}}>Account</a></li>
                                    <li><a href="javascript:void(0);" onClick={()=> {this.props.history.push('/logout');}}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
           </div>
        );
    }
}

export default Header;