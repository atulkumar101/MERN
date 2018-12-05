import React from 'react';
import style from '../../assets/style/style.css';
import {CPP, JAVA, PYTHON, HTML5, CSS3, JAVASCRIPT, JQUERY, BOOTSTRAP, POSTGRESQL, MONGODB, EXPRESSJS, REACTJS, NODEJS, MYSQL, PHP, ARDUINO} from '../../constant/App';
import Cpp from '../../assets/img/Icon/C++.png';
import Java from '../../assets/img/Icon/Java.png'; 
import Python from '../../assets/img/Icon/Python.png'; 
import Html5 from '../../assets/img/Icon/HTML5.png'; 
import Css3 from '../../assets/img/Icon/CSS3.png'; 
import Javascript from '../../assets/img/Icon/Javascript.png'; 
import jQuery from '../../assets/img/Icon/jQuery.png'; 
import Bootstrap from '../../assets/img/Icon/Bootstrap.png';
import PostgreSQL from '../../assets/img/Icon/PostgreSQL.png';
import MongoDB from '../../assets/img/Icon/MongoDB.png';
import ExpressJS from '../../assets/img/Icon/ExpressJS.png';
import ReactJS from '../../assets/img/Icon/ReactJS.png';
import NodeJS from '../../assets/img/Icon/NodeJS.png';
import MySQL from '../../assets/img/Icon/MySQL.png';
import Php from '../../assets/img/Icon/PHP.png';
import Arduino from '../../assets/img/Icon/Arduino.png';

class SkillImg extends React.Component {
    render() {
        return(
            <div className="skill_img">
                <ul className="list-inline">
                    <li>
                        <a href={CPP} target="_blank">
                            <img className="image" src={Cpp} alt="C++" />
                        </a>
                    </li>
                    <li>
                        <a href={JAVA} target="_blank">
                            <img className="image" src={Java} alt="Java" />
                        </a>
                    </li>
                    <li>
                        <a href={PYTHON} target="_blank">
                            <img className="image" src={Python} alt="Python" />
                        </a>
                    </li>
                    <li>
                        <a href={HTML5} target="_blank">
                            <img className="image" src={Html5} alt="HTML5" />
                        </a>
                    </li>
                    <li>
                        <a href={CSS3} target="_blank">
                            <img className="image" src={Css3} alt="CSS3" />
                        </a>
                    </li>
                    <li>
                        <a href={JAVASCRIPT} target="_blank">
                            <img className="image" src={Javascript} alt="JavaScript" />
                        </a>
                    </li>
                    <li>
                        <a href={JQUERY} target="_blank">
                            <img className="image" src={jQuery} alt="jQuery" />
                        </a>
                    </li>
                    <li>
                        <a href={BOOTSTRAP} target="_blank">
                            <img className="image" src={Bootstrap} alt="Bootstrap" />
                        </a>
                    </li>
                    <li>
                        <a href={POSTGRESQL} target="_blank">
                            <img className="image" src={PostgreSQL} alt="PostgreSQL" />
                        </a>
                    </li>
                    {/*<li>
                        <a href={MONGODB} target="_blank">
                            <img className="image" src={MongoDB} alt="MongoDB" />
                        </a>
                    </li>*/}
                    <li>
                        <a href={EXPRESSJS} target="_blank">
                            <img className="image" src={ExpressJS} alt="ExpressJS" />
                        </a>
                    </li>
                    <li>
                        <a href={REACTJS} target="_blank">
                            <img className="image" src={ReactJS} alt="ReactJS" />
                        </a>
                    </li>
                    <li>
                        <a href={NODEJS} target="_blank">
                            <img className="image" src={NodeJS} alt="NodeJS" />
                        </a>
                    </li>
                    <li>
                        <a href={MYSQL} target="_blank">
                            <img className="image" src={MySQL} alt="MySQL" />
                        </a>
                    </li>
                    <li>
                        <a href={PHP} target="_blank">
                            <img className="image" src={Php} alt="PHP" />
                        </a>
                    </li>
                    <li>
                        <a href={ARDUINO} target="_blank">
                            <img className="image" src={Arduino} alt="Arduino" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SkillImg;