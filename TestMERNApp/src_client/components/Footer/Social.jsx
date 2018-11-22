import React from 'react';
import Facebook from '../../assets/img/Icon/Facebook.png';
import Youtube from '../../assets/img/Icon/Youtube.png';
import Twitter from '../../assets/img/Icon/Twitter.png';
import Github from '../../assets/img/Icon/Github.png';
import LinkedIn from '../../assets/img/Icon/LinkedIn.png';
import '../../assets/style/style.css';
import { GITHUB, LINKEDIN, FACEBOOK, YOUTUBE, TWITTER } from '../../constant/App';


class Social extends React.Component {
    render() {
        return(
            <div className="social_details">
                <h4 className="heading w3-center"><strong>STAY CONNECTED</strong></h4><br/>
                    <a href={FACEBOOK} target="_blank">
                        <img className="icon w3-hover-opacity" src={Facebook} alt="Facebook" />
                    </a>
                    <a href={YOUTUBE} target="_blank">
                        <img className="icon w3-hover-opacity" src={Youtube} alt="Youtube" />
                    </a>
                    <a href={TWITTER} target="_blank">
                        <img className="icon w3-hover-opacity" src={Twitter} alt="Twitter" />
                    </a>
                    <a href={GITHUB} target="_blank">
                        <img className="left_align icon w3-hover-opacity" src={Github} alt="Github" />
                    </a>
                    <a href={LINKEDIN} target="_blank" >
                        <img className="icon w3-hover-opacity" src={LinkedIn} alt="LinkedIn" />
                    </a>
                <br/>
            </div>
        );
    }
}

export default Social;