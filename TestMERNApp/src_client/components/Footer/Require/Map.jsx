import React from 'react';

import { MAP } from '../../../assets/constant';

class Map extends React.Component {
    render() {
        return(
            <div className="map">
                <h4 className="heading w3-center"><strong>REACH ME</strong></h4><br/>
                
				<iframe src={MAP} width="300" height="200" frameBorder="0" style={{border:0}} className="r_map_frame" allowFullScreen={true}></iframe>
                {/*    
                <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="sarvesh18">
                    <a className="LI-simple-link" href='https://in.linkedin.com/in/sarvesh18?trk=profile-badge'>Sarvesh Singh</a>
                </div>
                */}
            </div>
        );
    }
}

export default Map;