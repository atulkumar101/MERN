import React from 'react';
import style from '../../assets/style/style.css';
import { RESUME } from '../../constant/App';

class DownloadCV extends React.Component {
    render() {
        return(
        //<hr>
            <div className="container text-center">
                    <button className="w3-btn w3-black w3-padding-large w3-margin-top w3-margin-bottom">
                        <a href={RESUME} target="_blank" style={{color: '#fff'}}>
                            <i className="fa fa-download w3-margin-right"></i>
                            Download Resume
                        </a>
                    </button>
            </div>
        );
    }
}

export default DownloadCV;