import React from 'react';

import {apiData} from '../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Select from './Select';
import ProductCard from '../components/Product/ProductCard';

import { calculateTotalPage, createPagination, calculateTotalProduct } from '../assets/utils';

class Pagination extends React.Component {
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
        this.props.apiData();
        this.calculatePagination();
    }
    componentDidUpdate(prevProps, prevState) {
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

    pagination(n) {
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
                <ul class="pagination">
                    <li><a href="javascript:void(0);" onClick ={() => this.pagination('Prev')}>Prev</a></li>
                    {this.state.totalPage.map(
                        (page, index) => {
                               return <li key={index}><a href="javascript:void(0);" onClick ={() => this.pagination(page)} style={this.state.currentPage === page ? { backgroundColor: '#fdce09' } : null}>{page}</a></li>
                        }
                    )}
                    <li><a href="javascript:void(0);" onClick ={() => this.pagination('Next')}>Next</a></li>
                </ul>

                <div className="container">{
                   //this.props.product.update.map(
                    this.state.product.map(
                        (prod, index) => {
                            return <ProductCard key={index} product={prod} history={this.props.history} />
                        }
                    )}
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Pagination);