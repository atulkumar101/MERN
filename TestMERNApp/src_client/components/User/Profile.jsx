import React from 'react';

import '../../assets/style/index.css';
import logo from '../../logo.svg';
import {profile} from '../../assets/utils/fetch';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            email: '',
            password: '',
            type: '',
            url: ''
        }
    }
    componentDidMount() {
        profile()
        .then(success => {
            const {_id, name, email, password, type, imageUrl} = success;
            const url = imageUrl ? imageUrl : logo;
            this.setState({_id, name, email, password, type, url});
        })
        .catch(error => console.log('profile', error));
    }
    render() {
        return (
            <div className="text-center">
                <div className="test">

                    <img className="profile_img img-responsive img-circle img-thumbnail" src={this.state.url} alt="Sarvesh" style={{marginTop:"-50px"}} />
                    <h1><b>{this.state.name}</b></h1>
                    <p className="dest"><b>{this.state.email}</b></p>
                    <p>{this.state.type}</p>
                    <p>{this.state.password}</p>
                    <div style={{margin: "24px 0"}}>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>        
                    </div>
                    <p><button type="button" onClick={()=> {
                        }}>Read More
                    </button></p>    
                </div>
            </div>
        )
    }
}

export default Profile;