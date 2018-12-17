import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'react-router';

function withAuth(WrappedComponent) {
    class Authentication extends React.Component {
        componentWillMount() {
            this.checkAuth();
        }
        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }
        checkAuth() {
            console.log('checkAuth');
            /*
            if(!this.props.isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            }
            */
        }
        render() {
            return (
                <React.Fragment>
                    {/*this.props.isAuthenticated === true
                        ? (<WrappedComponent {...this.props} />)
                        : ('SSSSSSSS')//null
                    */}
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
    const mapStateToProps = (state) =>  ({
        //token: state.auth.Token,
        //userName: state.auth.userName,
        //isAuthenticated: state.auth.isAuthenticated
        state
    });

    return connect(mapStateToProps)(Authentication);
}

export default withAuth;