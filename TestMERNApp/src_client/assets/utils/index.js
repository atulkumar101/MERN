/*
var auth2;

var initClient = function() {
    gapi.load('auth2', function(){
      
        auth2 = gapi.auth2.init({
            client_id: '496649971871-a3033tt0aso5bnfofvvm3js71c2iknhb.apps.googleusercontent.com">',
            scope: 'profile email'
            //,fetch_basic_profile: true
        });

        // Attach the click handler to the sign-in button
        auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
    });
};

var onSuccess = function(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
};

var onFailure = function(error) {
    console.log(error);
};
*/

export function check(){
    console.log('check click') 
}

export function calculateTotalPrice(products) {
    let total=0;
    products.map(product => (
      total = total+product.price
    ));
    console.log(total);
    return total;
}

export function calculateTotalPage(totalProduct) {
    const pageLimit=6;
    return Math.ceil(parseInt(totalProduct)/pageLimit) > 0 ? Math.ceil(parseInt(totalProduct)/pageLimit) : 1;
}

export function createPagination(page) {
    let totalPage=[];
    for(let i=1;i<=page;i++) {
        totalPage[i]=i;
    }
    return totalPage;
}

export function calculateTotalProduct(n, totalProduct) {
    let product=[];
    const pageLimit=6
    for(let i=(n-1)*pageLimit,j=0; j<pageLimit && totalProduct[i]!==undefined; i++,j++) {
        product[j]=totalProduct[i];
    }
    return product;
}