import React from 'react';
import style from '../../assets/style/style.css';
import Img from '../../assets/img/Sarvesh.jpg';

class ProfileImg extends React.Component {
    render() {
        return(
            <div>
                <img className="profile_img img-responsive img-circle img-thumbnail" src={Img} alt="Sarvesh" />
            </div>
        );
    }
}

export default ProfileImg;