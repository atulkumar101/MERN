import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart} from '../../redux/action/cart';
import {search} from '../../assets/util/fetch'; 

import PrintStar from '../common/PrintStar';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: ''
        }
    }
    componentDidMount() {
        search(this.props.match.params.id)
        .then(success => this.setState({product: success}))
        .then(()=>this.imageZoom("myimage", "myresult"))
        .catch(error => console.log('eror',error.toString()));
    }

    imageZoom = (imgID, resultID) => {
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        
        function moveLens(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }
    }
    
    render() {
        return (
            <div className="container">
                {/*
                <div className="img-zoom-container">
                    <img id="myimage" src={url} />
                </div>
                */}
                {
                    this.state.product?(
                            <div>
                                <div className="container">
                                    <div className="img-zoom-container">
                                        <img id="myimage" src={this.state.product.img}/>
                                    </div>
                                    <div id="myresult" className="img-zoom-result"></div>
                                </div>
                                <div className="container">
                                    <div>{this.state.product.name}</div>
                                    <div>{this.state.product.price}</div>
                                    <div><PrintStar rating={this.state.product.rating} /></div>
                                    <div>{this.state.product.category}</div>
                                    <div>{this.state.product.quantity>0?"Available":"Not Available"}</div>
                                    <div>{this.state.product.desc}</div>                                
                                </div>
                            </div>
                        ): ''
                }
                <div className="container">
                    <p><button type="button" onClick={()=> {
                            //console.log("history",this.props.history);
                            //console.log("location",this.props.location);
                            //console.log("match",this.props.match);
                            //console.log("staticContext",this.props.staticContext);
                            this.props.addToCart(this.state.product);
                            //this.props.history.push('/cart');
                        }}>Add to Cart
                    </button></p> 
                    <p><button type="button" onClick={()=> {
                            //console.log("history",this.props.history);
                            //console.log("location",this.props.location);
                            //console.log("match",this.props.match);
                            //console.log("staticContext",this.props.staticContext);
                            //this.props.addToCart(this.props.product.update);
                            this.props.history.push('/cart');
                        }}>Checkout
                    </button></p> 
                </div>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({addToCart}, dispatch);
}

export default connect(null,mapDispatchToProps)(ProductDetail);

