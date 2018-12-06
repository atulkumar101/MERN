import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Footer extends React.Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Footer</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default Footer;