import React from 'react';

import {removeLocalStorage} from '../../../assets/util/localStorage';
import {setCookie, getCookie, checkCookie, deleteCookie} from '../../../assets/util/cookie';


class Account extends React.Component {
    signOut() {
        /*
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('Gmail Logout');
        });
        */

        removeLocalStorage('token');

        //this.props.onStatusChange(false);
        //this.props.history.push('/signout');
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-danger"
                    onClick={()=>this.signOut()}>Signout</button>
            </div>
            
        )
    }

}

export default Account;
