import {PRODUCT, SORT, FILTER} from '../../assets/constant';
 
const initialState = {
    product: [],
    update: []
}

const product = (state=initialState, action) => { 
    const {product, update} = state;
    switch(action.type) {
        case PRODUCT: 
            return {product: [...action.product], update: [...action.product]};
       case SORT: 
            const sort=action.select === 'ASC' ? 
                update.sort((a, b) => {return a.price-b.price;}) : 
                update.sort((a, b) => {return b.price-a.price;});
            return {product: product, update: [...sort]};
        case FILTER: 
            const filter = typeof(action.select) === 'string' ? 
                product.filter(i => i.category===action.select) :    
                product.filter(i => i.rating >= action.select) ;
            return {product: product, update: [...filter]};
        default: 
            return state;
    }
}

export default product;