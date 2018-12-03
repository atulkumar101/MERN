import {SIGNIN_API, SIGNUP_API, PAGINATION_API, PRODUCT_TOKEN, PRODUCT_LIMIT} from '../../constant';

export const login = (email, password) => {
        return fetch(SIGNIN_API, {
            method: "POST", 
            headers: {
                //'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${AUTH_TOKEN}`
            },
            body: JSON.stringify({email:email, password:password}) 
        })
        .then(response => {
            if(!response.ok) {
                throw Error(response.url+" "+response.status+" "+response.statusText+" "+response);	
            }
            return response.json();
        })
}

export const register = (name, email, password) => {
        return fetch(SIGNUP_API, {
            method: "POST", 
            headers: {
                //'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${AUTH_TOKEN}`
            },
            body: JSON.stringify({name: name, email:email, password:password}) 
        })
        .then(response => {
            if(!response.ok) {
                throw Error(response.url+" "+response.status+" "+response.statusText+" "+response);	
            }
            return response.json();
        })
}

export const loadMore = (skip) => {
    const URL = `${PAGINATION_API}?skip=${skip}&limit=${PRODUCT_LIMIT}`; 
    fetchWrapper(URL);
    /*
        then(res => {
        let product=[];
        res.forEach(prod => {
            const {_id, name, price, rating, category, quantity, img, desc} = prod;
            product.push({_id, name, price, rating, category, quantity, img, desc});
        }) 
        //dispatch(addProduct(product));
        console.log('LoadMore', product);
        return product;
    }).catch(error => {
        return error
    });
    */
}

function handleResponse(response) {
	if(!response.ok) {
		throw Error(response.url+" "+response.status+" "+response.statusText+" "+response);	
    }
    console.log('response', response);
    console.log(response.headers.get('Content-Type'));
    return response.json();
    //response.text()
    //response.json()
    //response.formData()
    //response.blob() //URL.createObjectURL(object)
}

function fetchWrapper(url, options) {
    options = options || {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PRODUCT_TOKEN}`
        } 
    }
    return fetch(url, options)
    .then(handleResponse)
    .then((data) => {console.log('LoadMore', data)})
    .catch((error) => {console.log(error)});
}

/*

function timeout(value) {
 	return new Promise(function(resolve, reject) {
		setTimeout(function() {
            reject(new Error('Sorry, Request Timed Out.'));
        }, value);
	})	
} 
Promise.race([timeout(1000), fetchWrapper(url, options)])
    .then(function(response) {console.log(response);})
    .catch(function(error) {console.log(error);
})
*/

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