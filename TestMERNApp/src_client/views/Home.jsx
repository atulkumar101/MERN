import React from 'react';


import {apiData} from '../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {loadMore} from '../assets/utils';

import ProductCard from '../components/Product/ProductCard';

import Select from '../components/Select';
import Pagination from '../components/Pagination';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            skip:0,
            product:[]
        }
    }
    componentDidMount() {
        this.props.apiData();
        const product = loadMore(this.state.skip);
        this.setState(product);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.skip !== prevState.skip) {
            const product = loadMore(this.state.skip);
            this.setState(product);
        }
    }
    render() {
        return(
            <div>
                <Select />
                <Pagination  {...this.props}/>
                <button type="button" onClick={()=> {
                    const skip=this.state.skip+1;
                    this.setState({skip});
                }}>Load More</button>
                                
                <div className="container">{
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
