import React from 'react';
import logo from '../../logo.svg';

/*
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
}

img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
*/

class Thumbnail extends React.Component {

    render() {
        return(
            <div>
                <a target="_blank" href="check.jpg">
                <img src={logo} alt="Check" style={{width: "150px"}} />
                </a>
            </div>
        );
    }
}

export default Thumbnail;
