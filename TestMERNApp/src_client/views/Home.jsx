import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { calculateTotalPage, createPagination, calculateTotalProduct } from '../assets/util';
import { loadMore } from '../assets/util/fetch';

import {apiData} from '../redux/action/product';

import Select from '../components/Select';
import Products from '../components/Product/Products';
import Pagination from '../components/Pagination';
import Login from '../components/Material-UI/Login/SignIn';

import withPaginator from '../HOC/withPaginator';

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

    scroll() {
        let client = document.documentElement.clientHeight;
		let top = document.documentElement.scrollTop;
		let height = document.documentElement.scrollHeight - 1000;
		console.log(client, top, height);
        if( top > height) {
            loadMore(this.state.skip)
            .then((success) => this.setState({load: [...this.state.load, ...success], skip: this.state.skip+1}))
            .catch((error) => console.log('error', error.toString()));
        }
    }
    componentDidUpdate(prevProps, prevState) {
		/*
        if (this.state.load !== prevState.load) {
            loadMore(this.state.skip)
            .then((success) => console.log('success', success))
            .catch((error) => console.log('error', error.toString()));   
        }
		*/
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
