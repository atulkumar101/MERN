import React from 'react';

import Heading from './Require/Heading';
import Image from "./Require/Image";
import Contact from "./Require/Contact";
import Social from "./Require/Social";
import Map from "./Require/Map";
import Copyright from './Require/Copyright';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <span className="skype-button bubble" data-contact-id="live:sarvesh.singh18">
                    </span>
                    <div className="w3-center">
                        <Heading />
                    </div>
                    <Image />
                    <div className="footer_info">
                        <Contact />
                        <Social />
                        <Map />
                    </div>
                    <div className="w3-center">
                        <Copyright />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;