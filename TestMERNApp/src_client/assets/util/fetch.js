import {SIGNIN_API, SIGNUP_API, GMAIL_API, PROFILE_API, PAGINATION_API, SEARCH_API, PRODUCT_TOKEN, PRODUCT_LIMIT} from '../constant';
import {getLocalStorage} from './localStorage';

function handleResponse(response) {
	if(!response.ok) {
        throw Error(response.status+" : "+response.statusText);	
        //return response.text().then(error => {throw error});
    }
    const type = response.headers.get('Content-Type');
    console.log('type', type);
    let res;
    if(type.includes("json")) {
        res = response.json();
    }
    else if(type.includes("blob")) {
        res = response.blob();
    }
    else if(type.includes("formData")) {
        res = response.formData()
    }
    else {
        res = response.text()
    }
    return res;
}

function fetchWrapper(url, options) {
    return fetch(url, options)
    .then(handleResponse)
}

function timeout(value) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           reject(new Error('Sorry, Request Timed Out.'));
       }, value);
   })	
}



export const loadMore = (skip, url, options) => {
    url = url || `${PAGINATION_API}?skip=${skip}&limit=${PRODUCT_LIMIT}`; 
    options = options || {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PRODUCT_TOKEN}`
        } 
    }
    return Promise.race([timeout(1000), fetchWrapper(url, options)]);
} 



export const search = (id, url, options) => {
    url = url || `${SEARCH_API}?id=${id}`; 
    options = options || {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PRODUCT_TOKEN}`
        } 
    }
    return Promise.race([timeout(1000), fetchWrapper(url, options)]);
} 



/**
 * 
 */
export const profile = () => {
    const AUTH_TOKEN = getLocalStorage();
    console.log('profile',AUTH_TOKEN);
    return fetch(PROFILE_API, {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`
        },
    })
    .then(response => {
        if(!response.ok) {
            throw response;
        }
        return response.json();
    });
}

/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
export const login = (email, password) => {
    return fetch(SIGNIN_API, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${AUTH_TOKEN}`
        },
        body: JSON.stringify({email:email, password:password}) 
    })
    .then(response => {
        if(!response.ok) {
            return response.json().then(error => {throw (error.err)});
        }
        return response.json().then(success => success.token);
    })
}


/**
 * 
 * @param {*} name 
 * @param {*} email 
 * @param {*} password 
 */
export const register = (name, email, password) => {
    return fetch(SIGNUP_API, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${AUTH_TOKEN}`
        },
        body: JSON.stringify({name: name, email:email, password:password}) 
    })
    .then(response => {
        if(!response.ok) {
            return response.json().then(error => {throw (error.err)});
        }
        return response.json().then(success => success.token);
    })
}

/**
 * 
 * @param {*} googleUser 
 */
export function onSignIn(googleUser) {
    //console.log('googleUser',googleUser);
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    fetch(GMAIL_API,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ IDToken: id_token })
    })
    .then(function (response) {
        if (!response.ok) {
            throw response;
        }
        return response;
    })
    .then(function (response) {
        console.log(response.text());
    })
    .catch(function (error) {
        console.log(error);
    }); 
};