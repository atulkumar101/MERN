import React from 'react';
import Address from '../../assets/img/Icon/Address.png';
import Phone from '../../assets/img/Icon/Phone.png';
import Email from '../../assets/img/Icon/Email.png';
import '../../assets/style/style.css';
import { GITHUB, LINKEDIN, FACEBOOK, YOUTUBE, TWITTER } from '../../constant/App';


class Contact extends React.Component {
    render() {
        return(
            <div className="contact_details">
                <h4 className="heading w3-center"><strong>CONTACT ME</strong></h4><br/>
                <ul>
                    <li><img className="contact_icon w3-hover-opacity" src={Address} alt="Address" /><p>Daffodil Software, Gurugram</p></li>
                    <li><img className="contact_icon w3-hover-opacity" src={Phone} alt="Phone" /><p>+91-9454777897</p></li>
                    <li><img className="contact_icon w3-hover-opacity" src={Email} alt="Email" /><p>sarvesh.singh18@hotmail.com</p></li>
                </ul>
            </div>
        );
    }
}

export default Contact;