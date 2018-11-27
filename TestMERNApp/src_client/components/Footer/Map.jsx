import React from 'react';

import '../../assets/style/style.css';
//import {} from '../../constant/App';


class Footer extends React.Component {
    render() {
        return(
            <div className="map">
                <h4 className="heading w3-center"><strong>REACH ME</strong></h4><br/>
                
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5623171810594!2d77.05395781507875!3d28.462607482485186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d181b03ac9f6f%3A0x3ec5a92a519f94ad!2sDaffodil+Software!5e0!3m2!1sen!2sin!4v1542709601976" width="300" height="200" frameBorder="0" style={{border:0}} className="r_map_frame" allowFullScreen={true}></iframe>
                
                {/*    
                <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="sarvesh18">
                    <a className="LI-simple-link" href='https://in.linkedin.com/in/sarvesh18?trk=profile-badge'>Sarvesh Singh</a>
                </div>
                */}
            </div>
        );
    }
}

export default Footer;