import React from 'react';

class SignIn extends React.Component {
    render() {
        return (
            <div id="signin" className="tab-pane fade in active">
                <form onSubmit={event=>{event.preventDefault();}}>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                        <input type="email" name="email" className="form-control" placeholder="Email"
                            required
                            onChange={(event) => this.props.onInputChange(event) }/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input type="password" name="password" className="form-control" placeholder="Password"
                            required
                            onChange={(event) => this.props.onInputChange(event) }/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-success"
                        onClick={() => this.props.signIn()}>Sign In</button>
                </form>
           </div>
        )
    }
}

export default SignIn;