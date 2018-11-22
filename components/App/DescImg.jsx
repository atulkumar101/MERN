import React from 'react';
import '../../assets/style/style.css';
import { GITHUB, TECHGIG, HACKERRANK, HACKEREARTH, CODECHEF, LINKEDIN } from '../../constant/App';

import Github from '../../assets/img/Icon/Github.png';
import TechGig from '../../assets/img/Icon/TechGig.png';
import HackerRank from '../../assets/img/Icon/HackerRank.png';
import HackerEarth from '../../assets/img/Icon/HackerEarth.png';
import CodeChef from '../../assets/img/Icon/CodeChef.png';
import LinkedIn from '../../assets/img/Icon/LinkedIn.png';

class DescImg extends React.Component {
    render() {
        return(
            <div className="desc_img">
                <ul className="list-inline">
                    <li>
                        <a href={GITHUB} target="_blank">
                            <img className="image" src={Github} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href={TECHGIG} target="_blank">
                            <img className="image" src={TechGig} alt="TechGig" />
                        </a>
                    </li>
                    <li>
                        <a href={HACKERRANK} target="_blank">
                            <img className="image" src={HackerRank} alt="HackerRank" />
                        </a>
                    </li>
                    <li>
                        <a href={HACKEREARTH} target="_blank">
                            <img className="image" src={HackerEarth} alt="HackerEarth" />
                        </a>
                    </li>
                    <li>
                        <a href={CODECHEF} target="_blank">
                            <img className="image" src={CodeChef} alt="CodeChef" />
                        </a>
                    </li>
                    <li>
                        <a href={LINKEDIN} target="_blank">
                            <img className="image" src={LinkedIn} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DescImg;