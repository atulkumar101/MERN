import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div id="signup" className="tab-pane fade">
                <form onSubmit={
                    (event) => this.props.signUp(event)
                    //event=>{event.preventDefault();}
                    }>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input type="text" name="name" className="form-control" placeholder="First and Last Name"
                            required
                            onChange={(event) => this.props.onInputChange(event) }/>
                    </div>
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
                    <button type="submit" className="btn btn-success">Create An Account</button>
                </form>
            </div>
        )
    }
}

export default SignUp;