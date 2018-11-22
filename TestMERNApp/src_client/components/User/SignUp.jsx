import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div id="signup" className="tab-pane fade">
                <br/>
                <form onSubmit={event=>{event.preventDefault();}}>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input type="email" className="form-control" placeholder="First and Last Name"
                            onChange={event => this.setState({name: event.target.value})
                        }/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={event => this.setState({email: event.target.value})
                        }/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Password"
                            onChange={event => this.setState({password: event.target.value})
                        }/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-success"
                        onClick={() => this.signUp()}>Sign Up</button>
                </form>
                <hr/>
                <p>Or connect with:</p>
                <button type="button" className="btn btn-default"
                    onClick={() => this.sign()}>Facebook</button>
                <button type="button" className="btn btn-success"
                    onClick={() => this.sign()}>Github</button>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.sign()}>LinkedIn</button>
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark">g</div>
                <br/>
                <p>By signing up, you agree to our <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
            </div>
        )
    }
}

export default SignUp;