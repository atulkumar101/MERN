import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { apiData } from '../redux/action/product';

import {Select, Products, Pagination} from '../components';
import {withPaginator} from '../HOC';

import { calculateTotalPage, createPagination, calculateTotalProduct } from '../assets/util';
import { loadMore } from '../assets/util/fetch';

const ProductsHOC = withPaginator(Products);
const PaginationHOC = withPaginator(Pagination);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skip:0,
            page: 0,
            totalPage: [],
            currentPage: 1,
            product: [],
            load: []
        }
        this.scroll = this.scroll.bind(this);
    }
    componentDidMount() {
        this.props.apiData();
        this.calculatePagination();
		document.addEventListener("scroll", this.scroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scroll);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.product.update !== prevProps.product.update) {
            this.calculatePagination();
        }
    }

    scroll() {
        let client = document.documentElement.clientHeight;
		let top = document.documentElement.scrollTop;
		let height = document.documentElement.scrollHeight - 1000;
        if( top > height) {
            loadMore(this.state.skip)
            .then((success) => {
                const load = [...this.state.load, ...success];
                const skip = this.state.skip+1;
                this.setState({load, skip});
            })
            .catch((error) => console.log('error', error.toString()));
        }
    }

    calculatePagination() {
        const page = calculateTotalPage(this.props.product.update.length); 
        const totalPage= createPagination(page); 
        this.setState({page, totalPage});
        this.pagination(1);
    }

    pagination =(n) => {
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
        return(
            <div>
                {/*
                <ProductsHOC {...this.props}/>
                <PaginationHOC {...this.props}/>
                */}
                <Select />
                
                <Pagination products={this.state.product} totalPage={this.state.totalPage} currentPage={this.state.currentPage} pagination={this.pagination} {...this.props}/>

                <Products products={this.state.product} {...this.props}/>

                <Products products={this.state.load} {...this.props} />
                </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        product: state.product
    });
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({apiData}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

