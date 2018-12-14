import React from 'react';

import {ProductCard} from '../components'; 
import withPaginator from './withPaginator';

class Products extends React.Component {
    componentDidMount() {
        console.log('products mount',this.props.products);
    }
    componentDidUpdate() {
        console.log('products update',this.props.products);
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

export default withPaginator(Products);