import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Alert extends React.Component {
    /*
    var close = document.getElementsByClassName("closebtn");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
        }
    }
    */
    render() {
        return(
            <div>
                <div class="alert">
                    <span class="closebtn">&times;</span>  
                    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                </div>

                <div class="alert success">
                    <span class="closebtn">&times;</span>  
                    <strong>Success!</strong> Indicates a successful or positive action.
                </div>

                <div class="alert info">
                    <span class="closebtn">&times;</span>  
                    <strong>Info!</strong> Indicates a neutral informative change or action.
                </div>

                <div class="alert warning">
                    <span class="closebtn">&times;</span>  
                    <strong>Warning!</strong> Indicates a warning that might need attention.
                </div>
            </div>
        )
    }
}

export default Alert;