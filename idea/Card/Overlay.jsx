import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Overlay2 extends React.Component {
    on() {
        console.log('on()');
        document.getElementById("overlay").style.display = "block";
    }

    off() {
        console.log('off()');
        document.getElementById("overlay").style.display = "none";
    }
    render() {
        return(
            <div>
                <div id="overlay" onClick={()=> this.off()}>
                    <div id="text">Overlay Text</div>
                </div>
                <button onClick={()=>this.on()}>Turn on overlay effect</button>
            </div>
        )
    }
}

export default Overlay2;
