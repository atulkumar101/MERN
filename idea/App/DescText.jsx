import React from 'react';
import style from '../../assets/style/style.css';
import { CODEBOOK, WEBAPP, SOFTWARE, MOBILEAPP, WEBDESIGN, SOURCECODE } from '../../constant/App';

class DescText extends React.Component {
    render() {
        return(
            <div className="desc_text">
                <a href={CODEBOOK} target="_blank" style={{color: 'rgb(0,0,0)'}}>{/*Competitive*/}Coder</a>
                &nbsp;|
                <a href={WEBAPP} target="_blank" style={{color: 'rgb(0,0,0)'}}>Web Developer</a>
                &nbsp;|
                <a href={SOFTWARE} target="_blank" style={{color: 'rgb(0,0,0)'}}>Software Developer</a>
                &nbsp;|
                <a href={MOBILEAPP} target="_blank" style={{color: 'rgb(0,0,0)'}}>Mobile App Developer</a>
                &nbsp;|
                <a href={WEBDESIGN} target="_blank" style={{color: 'rgb(0,0,0)'}}>Web Designer </a>
                &nbsp;|
                <a href={SOURCECODE} target="_blank" style={{color: 'rgb(0,0,0)'}}>Freelancer</a>
            </div>
        );
    }
}

export default DescText;