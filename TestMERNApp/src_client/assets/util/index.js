import {PRODUCT_LIMIT} from '../constant';
export * from './fetch';

export function calculateTotalPrice(products) {
    let total=0;
    products.map(product => (
      total = total+product.price
    ));
    return total;
}

export function calculateTotalPage(totalProduct) {
    return Math.ceil(parseInt(totalProduct)/PRODUCT_LIMIT);
}

export function createPagination(page) {
    let totalPage=[];
    for(let i=1;i<=page;i++) {
        totalPage[i-1]=i;
    }
    return totalPage;
}

export function calculateTotalProduct(n, totalProduct) {
    let product=[];
    for(let i=(n-1)*PRODUCT_LIMIT,j=0; j<PRODUCT_LIMIT && totalProduct[i]!==undefined; i++,j++) {
        product[j]=totalProduct[i];
    }
    return product;
}



