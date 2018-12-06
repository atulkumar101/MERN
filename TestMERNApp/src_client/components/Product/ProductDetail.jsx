import React, {Component} from "react";
import '../../assets/style/style.css';

//import Checkout from '../Material-UI/Checkout';
import {addToCart} from '../../redux/action/cart';
import {findByID} from '../../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PrintStar from '../PrintStar';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Promise.resolve(this.props.findByID(this.props.match.params.id))
        .then(()=>this.imageZoom("myimage", "myresult"));
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
                {this.props.product.update.map(
                        (prod, index) => {
                            return (<div key={index}>
                                <div className="container">
                                    <div className="img-zoom-container">
                                        <img id="myimage" src={prod.img}/>
                                    </div>
                                    <div id="myresult" className="img-zoom-result"></div>
                                </div>
                                <div className="container">
                                    <div>{prod.name}</div>
                                    <div>{prod.price}</div>
                                    <div><PrintStar rating={prod.rating} /></div>
                                    <div>{prod.category}</div>
                                    <div>{prod.quantity>0?"Available":"Not Available"}</div>
                                    <div>{prod.desc}</div>                                
                                </div>
                            </div>);
                        }
                )}
                <div className="container">
                    <p><button type="button" onClick={()=> {
                            //console.log("history",this.props.history);
                            //console.log("location",this.props.location);
                            //console.log("match",this.props.match);
                            //console.log("staticContext",this.props.staticContext);
                            this.props.addToCart(this.props.product.update);
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

function mapStateToProps(state, ownProps) {
    return ({
        product: state.product
    });
}
function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({findByID, addToCart}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);

