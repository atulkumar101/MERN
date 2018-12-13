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

/*
if (auth2.isSignedIn.get()) {
    var profile = auth2.currentUser.get().getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

 <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!</a>

 https://developer.github.com/v3/guides/basics-of-authentication/

 https://github.com/github/platform-samples/tree/master/api/javascript/es2015-nodejs/recipes
*/