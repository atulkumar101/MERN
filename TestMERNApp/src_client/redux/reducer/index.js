import {combineReducers} from 'redux';

import auth from './auth';
import cart from './cart';
import product from './product';

const reducers = combineReducers({
    auth,
    cart,
    product
}) 

export default reducers;