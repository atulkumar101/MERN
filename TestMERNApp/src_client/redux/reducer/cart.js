import {CART, ADD, REMOVE} from '../../constant';

const initialState = {
    products: [
    ],
    addresses: [
        '1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'
    ],
    payments: [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: 'Mr XYZ' },
        { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
        { name: 'Expiry date', detail: '04/2024' }
    ]
}

const cart = (state=initialState, action) => { 
    const {products, addresses, payments} = state;
    switch(action.type) {
        case CART: 
            return {products: products, addresses: addresses, payments: payments};
        case ADD:
            return {products: [...products,...action.add] , addresses: addresses, payments: payments};
        case REMOVE: 
            return {products: products, addresses: addresses, payments: payments};
        default: 
            return state;
    }
}

export default cart;