import {PRODUCT_API, PRODUCT, FIND, SORT, FILTER} from '../../constant';

export const apiData = () => {
    return (dispatch,getState) => {
        fetch(PRODUCT_API, {
            method: "GET", 
        })
        .then(response => {
            if(!response.ok) {
                throw Error(response.url+" "+response.status+" "+response.statusText);
            }
            return response.json();
            //response.text()
            //response.json()
            //response.formData()
            //response.blob() //URL.createObjectURL(object)
        }).then(res => {
            let product=[];
            res.forEach(prod => {
                const {_id, name, price, rating, category, quantity, img, desc} = prod;
                product.push({_id, name, price, rating, category, quantity, img, desc});
            }) 
            dispatch(addProduct(product));
        }).catch(error => console.log(error));
    }
}

export const addProduct = (product) => {
    const action = {
        type: PRODUCT,
        product
    };
    return action;
}
export const findByID = (_id) => {
    const action = {
        type: FIND,
        _id    
    }
    return action;
}

export const sortBy = (select) => {
    const action = {
        type: SORT,
        select
    }
    return action;
}

export const filterBy = (select) => {
    const action = {
        type: FILTER,
        select    
    }
    return action;
}