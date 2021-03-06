import React from 'react';

import ProductCard from './ProductCard'; 

class Products extends React.Component {
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