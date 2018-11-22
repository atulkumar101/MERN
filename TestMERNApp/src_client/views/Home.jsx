import React from 'react';


import {apiData} from '../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductCard from '../components/Product/ProductCard';

import Select from '../components/Select';
import Pagination from '../components/Pagination';

class Home extends React.Component {
    componentDidMount() {
        this.props.apiData();
    }
    render() {
        return(
            <div>
                <Select />
                <Pagination />
                {/*
                <div className="container">{
                   //this.props.product.update.map(
                    this.props.product.update.map(
                        (prod, index) => {
                            return <ProductCard key={index} product={prod} history={this.props.history} />
                        }
                    )}
                </div>
                */}
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

//()=>check() import { check } from '../assets/utils';
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
