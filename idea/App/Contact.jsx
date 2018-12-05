import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div class="w3-container w3-padding-64 w3-theme-l5" id="myContact">
                    <div class="w3-row">
                        <div class="w3-col m5">
                            <div class="w3-padding-16"><span class="w3-xlarge w3-border-dark-grey w3-bottombar">Contact Us</span></div>
                            <h3>Address</h3>
                            <p>ABES Engineering College</p>
                            <p><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Ghaziabad</p>
                            <p><i class="fa fa-phone w3-text-teal w3-xlarge"></i>  +919454777897</p>
                            <p><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  sarvesh.singh18@hotmail.com</p>
                        </div>

                        <div class="w3-col m7">
                            <div class="w3-container w3-card-4 w3-padding-16 w3-white">
                                <div class="w3-group">
                                    <label class="w3-label">Name</label>
                                    <input class="w3-input" type="text" id="name" required/>
                                </div>
                                <div class="w3-group">
                                    <label class="w3-label">Email</label>
                                    <input class="w3-input" type="text" id="email" required/>
                                </div>
                                <div class="w3-group">
                                    <label class="w3-label">Subject</label>
                                    <input class="w3-input" type="text" id="subject" required/>
                                </div>
                                <input class="w3-check" type="checkbox" value="true" id="likes" checked/>
                                <label class="w3-validate">I Like it!</label>
                                <input class="w3-btn w3-right w3-theme" type="submit" value="Send" id="add_btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;