//XMLHttpRequest
//Promise
//Asynchronous
const axios = require('axios');
import {PAGINATION_API, SIGNIN_API, PRODUCT_TOKEN, PRODUCT_LIMIT, BASE_URL} from '../constant/index';

axios.defaults.headers.common['Authorization'] = `Bearer ${PRODUCT_TOKEN}`;
//axios.defaults.headers.post['Content-Type'] = 'application/json';

export const get = (skip) => {
    return axios.get(PAGINATION_API,{
        //headers: {'Authorization': `Bearer ${PRODUCT_TOKEN}`},
        params: {
            skip: skip,
            limit: PRODUCT_LIMIT
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('get'));
}

export const post = () => {
    return axios.post(SIGNIN_API,{
        data: {
            email:'test@test.com', 
            password:'123456'
        } 
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('post'));
}

export const test = (skip) => {
    return axios({
        url: '/api/pagination',
        method: 'get',//default get
        baseURL: BASE_URL,
        /*transformRequest: [(data, headers) => {
            return data;
        }],
        transformResponse: [(data) => {
            return data;
        }],*/
        headers: {'Authorization': `Bearer ${PRODUCT_TOKEN}`},
        params: {
            skip: skip,
            limit: PRODUCT_LIMIT
        },
        /*data: {
            name: ''
        },*/
        timeout: 1000, //default 0,
        //withCredentials: false, //default
        //responseType: 'json', //default
        //responseEncoding: 'utf8', //default
        //xsrfCookieName: 'XSRF-TOKEN', //default
        //xsrfHeaderName: 'X-XSRF-TOKEN', //default
        onUploadProgress: (progressEvent) => {
            console.log('onUploadProgress');
        },
        onDownloadProgress: (progressEvent) => {
            console.log('onDownloadProgress');
        },
        //maxContentLength: 2000, 
        validateStatus: (status) => {
            return status >= 200 && status < 300; //default
        },
        //maxRedirects: 5 //default
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('test'));
}
/*
response
{
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    request: {}
}
*/
/*
error
if(error.response) {
    error.response.data
    error.response.status
    error.response.headers
}
else if(error.request) {
    error.request;
}
else {
    error.message
}
error.config;
*/

/*
axios.all([])
.then(axios.spread(() => {
}));
*/