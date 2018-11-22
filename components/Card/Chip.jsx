import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Chip extends React.Component {
    render() {
        return(
            <div className="chip">
                <img src={logo} alt="Person" width="96" height="96" />
                    Sarvesh Singh
                <span className="closebtn" onClick={()=> {this.parentElement.style.display='none'}}>&times;</span>
            </div>
        )
    }
}

export default Chip;
