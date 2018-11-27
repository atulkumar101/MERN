import React from 'react';
import '../assets/style/style.css';

import ProductCard from './Product/ProductCard'; 

class Products extends React.Component {
    componentDidMount() {
        console.log('Product props', this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.products !== prevProps.products) {
            console.log('Update Product props', this.props);
        }
    }
    render() {
        return(
            <div className="container">{
                 this.props.products.map(
                     (prod, index) => {
                         return <ProductCard key={index} product={prod} history={this.props.history} />
                     }
                 )}
             </div>
        )
    }
}

export default Products;