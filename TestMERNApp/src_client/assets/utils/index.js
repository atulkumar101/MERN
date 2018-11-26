import {PAGINATION_API, PRODUCT_TOKEN, PRODUCT_LIMIT} from '../../constant';

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
export function calculateTotalPrice(products) {
    let total=0;
    products.map(product => (
      total = total+product.price
    ));
    console.log(total);
    return total;
}

export function calculateTotalPage(totalProduct) {
    return Math.ceil(parseInt(totalProduct)/PRODUCT_LIMIT);
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
    for(let i=(n-1)*PRODUCT_LIMIT,j=0; j<PRODUCT_LIMIT && totalProduct[i]!==undefined; i++,j++) {
        product[j]=totalProduct[i];
    }
    return product;
}

export const loadMore = (skip) => {
    fetch(`${PAGINATION_API}?skip=${skip}&limit=${PRODUCT_LIMIT}`, {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PRODUCT_TOKEN}`} 
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
        //dispatch(addProduct(product));
        console.log(product);
        return product;
    }).catch(error => {
        return error
    });

}




/* 
Promise.race([timeout(1000), fetchWrapper(url, options)])
    .then(function(response) {console.log(response);})
    .catch(function(error) {console.log(error);
})

function timeout(value) {
 	return new Promise(function(resolve, reject) {
		setTimeout(function() {
            reject(new Error('Sorry, Request Timed Out.'));
        }, value);
	})	
}

function fetchWrapper(url, options) {
    var options = options || {};
    //method: "GET", 
    options.headers['Content-Type']='application/json';
    options.headers['Authorization']=`Bearer ${PRODUCT_TOKEN}`;
	return fetch(url, options)
	.then(handleResponse);
}

function handleResponse(response) {
	if(!response.ok) {
		throw Error(response.url+" "+response.status+" "+response.statusText);	
    }
    return response.json();
    //response.text()
    //response.json()
    //response.formData()
    //response.blob() //URL.createObjectURL(object)
}



fetchWrapper('')
.then((data) => {console.log(data);})
.catch((error) => {console.log(error)});
*/


