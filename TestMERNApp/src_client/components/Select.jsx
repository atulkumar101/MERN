import React from 'react';

import {sortBy, filterBy} from '../redux/action/product';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ["Mobile", "Laptop", "Refrigerator", "Washing Machine", "TV", "Speaker", "Camera", "Headphones", "Shaver", "Trimmer", "Band", "Kindle", "Fire TV"],
            rating: [1, 2, 3, 4, 5],
        };
    }
    render() {
        return(
            <div className="container">
                <div class="dropdown" style={{float:'left'}}>
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By Price
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" onClick ={() => this.props.sortBy('ASC')}>Low to High</a></li>
                        <li><a href="javascript:void(0);" onClick ={() => this.props.sortBy('DESC')}>High to Low</a></li>
                    </ul>
                </div>

                <div class="dropdown" style={{float:'left'}}>
                    <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Filter By Category
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        {this.state.category.map(
                            (cat, index) => {
                                return <li key={index}><a href="javascript:void(0);" onClick ={() => this.props.filterBy(cat)}>{cat}</a></li>
                            }
                        )}
                    </ul>
                </div>

                <div class="dropdown" style={{float:'left'}}>
                    <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">Filter By Star
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        {this.state.rating.map(
                            (rat, index) => {
                                return <li key={index}><a href="javascript:void(0);" onClick ={() => this.props.filterBy(rat)}>{rat} Star</a></li>
                            }
                        )}
                    </ul>
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
    return bindActionCreators({sortBy, filterBy}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Select);

