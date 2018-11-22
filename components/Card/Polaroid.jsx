import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Polaroid extends React.Component {
    render() {
        return(
            <div class="polaroid rotate_right"> {/*rotate_left*/}
                <img src={logo} alt="Pulpit rock" width="284" height="213" />
                {/*<img src={logo} alt="Norway" style={{width:"100%"}} />*/}
                <p className="caption">The pulpit rock in Lysefjorden, Norway.</p>
            </div>
        )
    }
}

export default Polaroid;


