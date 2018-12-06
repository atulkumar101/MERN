import React from 'react';

import { calculateTotalPage, createPagination, calculateTotalProduct } from '../assets/utils';

//import {compose} from 'redux';
import {connect} from 'react-redux';

function withPaginator(WrappedComponent) {
    //return class extends React.Component {}
    class Paginator extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                page: 0,
                totalPage: [],
                currentPage: 1,
                product: []
            };
        }
        componentDidMount() {
            this.calculatePagination();
            //console.log('withPaginator props',this.props);
        }
        componentDidUpdate(prevProps, prevState) {
            if (this.props.product.update !== prevProps.product.update) {
                this.calculatePagination();
                //console.log('Update withPaginator props',this.props);
            }
        }
        calculatePagination() {
            const page = calculateTotalPage(this.props.product.update.length); 
            const totalPage= createPagination(page);
            this.setState({page, totalPage});
            this.pagination(1);
        }
        pagination = (n) => {
            switch(n) {
                case 'Next' : 
                    n=this.state.currentPage+1 <= this.state.page ? this.state.currentPage+1 : 1; 
                    break;
                case 'Prev' :
                    n=this.state.currentPage-1 >=1 ? this.state.currentPage-1 : this.state.page;
                    break;
                default: 
            }
            const product = calculateTotalProduct(n, this.props.product.update);
            this.setState({product, currentPage: n});
        }
        render() {
            const products = this.state.product;
            const totalPage = this.state.totalPage;
            const currentPage = this.state.currentPage;
            return (<WrappedComponent products={products} totalPage={totalPage} currentPage={currentPage} pagination={this.pagination} {...this.props}/>);
        }
    }
    return connect(mapStateToProps)(Paginator);
    //return Paginator;
}

function mapStateToProps(state) {
    return ({
        product: state.product
    });
}
/*
const composedWrapper = compose(
    connect(mapStateToProps, null),
    withPaginator
);
export default composedWrapper;
*/
export default withPaginator;