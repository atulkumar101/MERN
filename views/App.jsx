import React from 'react';

import ProfileImg from '../components/App/ProfileImg';
import ProfileText from '../components/App/ProfileText';
import DescImg from '../components/App/DescImg';
import DescText from '../components/App/DescText';
import SkillImg from '../components/App/SkillImg';
import SkillText from '../components/App/SkillText';
import DownloadCV from '../components/App/DownloadCV';
//import Footer from '../components/Footer/Footer';
import '../assets/style/index.css';
import logo from '../logo.svg';

class App extends React.Component {
    render() {
        return(
            <div className="text-center">

                <div className="test">
                
                    <img className="profile_img img-responsive img-circle img-thumbnail" src={logo} alt="Sarvesh" style={{marginTop:"-50px"}} />
                    <h1><b>Sarvesh Singh</b></h1>
                    <p className="dest"><b>Junior Associate -IT at Daffodil Software</b></p>
                    <p>Desc</p>
                    <div style={{margin: "24px 0"}}>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>        
                    </div>
                    <p><button type="button" onClick={()=> {
                            //console.log("history",this.props.history);
                            //console.log("location",this.props.location);
                            //console.log("match",this.props.match);
                            //console.log("staticContext",this.props.staticContext);
                        }}>Buy
                    </button></p>    
                </div>
                {/*
                <div className="profile">
                    <ProfileImg />
                    <ProfileText />
                </div>
                <div className="desc">
                    <DescImg />
                    <DescText />
                </div>
                <div className="skill">
                    <SkillText />
                    <SkillImg />
                </div>
                <div>
                    <DownloadCV />           
                </div>
                */}
                <div className="footer">
                    <div className="container">
                        <span className="skype-button bubble" data-contact-id="live:sarvesh.singh18">
                        </span>
                        <div className="w3-center">
                        {/*
                            <h4 className="heading"><strong>LET'S KEEP CODING</strong><h4>
                            <h4 className="heading"><strong>We'd love to hear from you</strong><h4>
                            <h4 className="heading"><strong>GET IN TOUCH</strong><h4> 
                        */}
                        </div>
                        {/*
                        <img className="footer_img" src="footerfinal.png" alt="footer" title="Contact Us" />
                        */}
                        <div className="footer_info">
                            {/*<Contact />
                            <Social />
                            <Map />*/}
                        </div>

                        <div className="w3-center">
                            <h4 className="heading"><strong>Copyright &copy; 2018. All Rights Reserved.</strong></h4>
                            {/*Developed & Maintained by*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;