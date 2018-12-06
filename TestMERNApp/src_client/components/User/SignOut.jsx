import React from 'react';

class Account extends React.Component {
    signOut() {
        console.log('signout()');
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('SignOut');
        });
        //this.props.onStatusChange(false);
        //this.props.history.push('/signout');
  
    }
    render() {
        return(
            <div>
                <h3>Please SignIn or SignUp!</h3>
                {/*<Link to={'/signin'}>SignIn</Link><br/>
                <Link to={'/signup'}>SignUp</Link>*/}
                <button type="button" className="btn btn-danger"
                    onClick={()=>this.signOut()}>Signout</button>
            </div>
            
        )
    }

}

export default Account;
