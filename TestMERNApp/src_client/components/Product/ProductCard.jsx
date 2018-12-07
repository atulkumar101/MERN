import React from 'react';

import PrintStar from '../PrintStar'; 

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="card">
                <img className="img" src={this.props.product.img} alt="Image" />
                <h1><b>{this.props.product.name}</b></h1>
                <p className="price">${this.props.product.price}</p>
                <p className="desc">{this.props.product.desc}</p>
                <div style={{margin: "24px 0"}}>
                    {/*<a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>*/}
                    <PrintStar rating={this.props.product.rating} />           
                </div>
                <p><button type="button" onClick={()=> {
                        //console.log("history",this.props.history);
                        //console.log("location",this.props.location);
                        //console.log("match",this.props.match);
                        //console.log("staticContext",this.props.staticContext);
                        this.props.history.push('/product/'+this.props.product._id);
                    }}>Buy
                </button></p> 
            </div>
        )
    }
}

export default ProductCard;
