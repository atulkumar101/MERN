import {CART, ADD, REMOVE} from '../../assets/constant';

export const addCart = (cart) => {
    const action = {
        type: CART,
        cart
    }
    return action;
}

export const addToCart = (add) => {
    const action = {
        type: ADD,
        add
    }
    return action;
}

export const removeFromCart = (remove) => {
    const action = {
        type: REMOVE,
        remove
    }
    return action;
}