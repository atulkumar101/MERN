import React from 'react';

class SocialSignIn extends React.Component {
    render() {
        return(
            <React.Fragment>
                <p>Or connect with:</p>
                <button type="button" className="btn btn-default"
                    onClick={() => this.facebook()}>Facebook</button>
                <button type="button" className="btn btn-success"
                    onClick={() => this.github()}>Github</button>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.linkedin()}>LinkedIn</button>
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
            </React.Fragment>
        )
    }
}

export default SocialSignIn;