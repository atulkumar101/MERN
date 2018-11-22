import React from 'react';

import '../../assets/style/index.css';
import logo from '../../logo.svg';

class Profile extends React.Component {
    render() {
        return (
            <div className="text-center">
                <div className="test">

                    <img className="profile_img img-responsive img-circle img-thumbnail" src={logo} alt="Sarvesh" style={{marginTop:"-50px"}} />
                    <h1><b>XXX{/*Sarvesh Singh*/}</b></h1>
                    <p className="dest"><b>XXX{/*Junior Associate -IT at Daffodil Software*/}</b></p>
                    <p>Desc</p>
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