import React from 'react';

class SignIn extends React.Component {
    render() {
        return(
            <div className="tab-content">
                <div id="signin" className="tab-pane fade in active">
                <br/>
                <form onSubmit={event=>{event.preventDefault();}}>
                <br/>
                <div className="input-group has-success has-feedback">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input type="email" className="form-control" placeholder="Username or Email"
                    ref={this.inpEmail}
                    required
                    onChange={event => this.setState({email: event.target.value})
                    }/>
                    <span className="glyphicon glyphicon-ok form-control-feedback"></span>
                </div>
                <br/>

                <div className="input-group has-success has-feedback">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"
                    ref={this.inpPass}
                    required
                    onChange={event => this.setState({password: event.target.value})
                    }/>
                    <span className="glyphicon glyphicon-ok form-control-feedback"></span>
                </div>
                <br/>
                {
                    //has-success
                    //<span className="glyphicon glyphicon-ok form-control-feedback"></span>
                    //has-warning
                    //<span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>
                    //has-error
                    //<span className="glyphicon glyphicon-remove form-control-feedback"></span>
                }

                <div className="input-group">
                    <input type="checkbox"/>
                    <label><span className="input-group-addon"> Remember me</span></label>
                    <a>Forget your password ?</a>
                </div>

                <button type="submit" className="btn btn-success"
                    onClick={() => this.signIn()}>Sign In</button>
                </form>
                <hr/>
                <p>Or connect with:</p>
                <button type="button" className="btn btn-default"
                    onClick={() => this.sign()}>Facebook</button>
                <button type="button" className="btn btn-success"
                    onClick={() => this.sign()}>Github</button>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.sign()}>LinkedIn</button>
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                <br/>
                <p>By signing up, you agree to our <a target="_blank">Terms of Service</a> and <a>Privacy Policy</a>.</p>

            </div>
        </div>
        )
    }
}

export default SignIn;