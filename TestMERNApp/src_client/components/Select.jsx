import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sortBy, filterBy} from '../redux/action/product';

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
                <select style={{float:'left'}} onChange={(event) => this.props.sortBy(event.target.value)}>
                    <option value="*">SELECT By Price</option>
                    <option value="ASC">Low to High</option>
                    <option value="DESC">High to Low</option>
                </select>
        
                <select style={{float:'left'}} onChange={(event) => this.props.filterBy(event.target.value)}>
                    <option value="*">SELECT By Category</option>
                    {this.state.category.map(
                            (cat, index) => {
                                return <option key={index} value={cat}>{cat}</option>
                            }
                    )}
                </select>
    
                <select style={{float:'left'}} onChange={(event) => this.props.filterBy(parseInt(event.target.value))}>
                    <option value="*">SELECT By Rating</option>
                    {this.state.rating.map(
                            (rat, index) => {
                                return <option key={index} value={rat}>{rat} Star</option>
                            }
                    )}
                </select>
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

