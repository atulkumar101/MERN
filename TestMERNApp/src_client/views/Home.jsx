import React from 'react';

import {apiData} from '../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { loadMore, calculateTotalPage, createPagination, calculateTotalProduct } from '../assets/utils';

import Select from '../components/Select';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

import withPaginator from '../HOC/withPaginator';

const ProductsHOC = withPaginator(Products);
const PaginationHOC = withPaginator(Pagination);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            skip:0,
            page: 0,
            totalPage: [],
            currentPage: 1,
            product: []
        }
    }
    componentDidMount() {
        this.props.apiData();
        this.calculatePagination();
        const product = loadMore(this.state.skip);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.skip !== prevState.skip) {
            const product = loadMore(this.state.skip);
        }
        if (this.props.product.update !== prevProps.product.update) {
            this.calculatePagination();
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
                
                <Products products={this.state.product} {...this.props}/>
                <Pagination products={this.state.product} totalPage={this.state.totalPage} currentPage={this.state.currentPage} pagination={this.pagination} {...this.props}/>
         
                <button type="button" onClick={()=> {
                    const skip=this.state.skip+1;
                    this.setState({skip});
                }}>Load More</button>
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

//this.props.thunkAction('okokokok');
//this.props.dispatch(testAction('ssssssss'));

   /*
    isUserLoggedIn() {
        console.log('isUserLoggedIn()');
        if(this.state.email!='')
        {
        return true;
        }
        else if(this.state.email=='') {
        return false;
        }
        else {
        return null;
        }
    }
    */
