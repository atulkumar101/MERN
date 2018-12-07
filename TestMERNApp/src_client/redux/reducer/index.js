import {combineReducers} from 'redux';

import cart from './cart';
import product from './product';

const reducers = combineReducers({
    cart,
    product
}) 

export default reducers;