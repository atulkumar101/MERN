/*
module.exports = {
    'SECRET': 'someRandomSecretValue',
    'MONGO_URL': 'mongodb://127.0.0.1:27017/E-Commerce',
    'GMAIL_ID': 'sarvesh.smcs2@gmail.com',
    'Gmail_ClientID': '496649971871-a3033tt0aso5bnfofvvm3js71c2iknhb.apps.googleusercontent.com'
};
*/
export const SECRET="someRandomSecretValue";

export const PAYLOAD={
    iss: 'issuer',
    sub: 'subject',
    aud: 'audience',
    //exp: 'expiration time',
    name: 'Product'
};

export const MONGO_URL= 'mongodb://127.0.0.1:27017/E-Commerce';
export const GMAIL_ID= 'sarvesh.smcs2@gmail.com';
export const GMAIL_ClientID= '496649971871-t9ed313fksf66p2335q5aumong4p0ihg.apps.googleusercontent.com';


export const EC400 = 'BadRequest-Your request could not be processed.';
export const EC401 = 'APIKeyMissing/Invalid-Your request did not include an API key OR Your API key may be invalid.';
export const EC403 = 'Forbidden-You are not permitted to access this resource.';
export const EC404 = 'ResourceNotFound-The requested resource could not be found.';
export const EC405 = 'MethodNotAllowed-The requested method and resource are not compatible. See the Allow header for this resource’s available methods.'
export const EC500 = 'InternalServerError-An unexpected internal error has occurred. Please contact Support for more information.'

