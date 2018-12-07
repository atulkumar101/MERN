/**
 * SECRET
 */
export const SECRET = "someRandomSecretValue";

/**
 * Payload
 */
export const PAYLOAD = {
    iss: 'issuer',
    sub: 'subject',
    aud: 'audience',
    //exp: 'expiration time',
    name: 'Product'
};

/**
 * Database
 */
export const MONGO_URL = "mongodb://127.0.0.1:27017/E-Commerce";

/**
 * ErrorCode
 */
export const ERROR400 = 'BadRequest-Your request could not be processed.';
export const ERROR401 = 'APIKeyMissing/Invalid-Your request did not include an API key OR Your API key may be invalid.';
export const ERROR403 = 'Forbidden-You are not permitted to access this resource.';
export const ERROR404 = 'ResourceNotFound-The requested resource could not be found.';
export const ERROR405 = 'MethodNotAllowed-The requested method and resource are not compatible. See the Allow header for this resource’s available methods.'
export const ERROR500 = 'InternalServerError-An unexpected internal error has occurred. Please contact Support for more information.'

/**
 * Auth POST
 */
export const GMAIL_URL = "/gmail";
export const GITHUB_URL = "/github";
export const FACEBOOK_URL = "/facebook";
export const LINKEDIN_URL = "/linkedin";
export const SIGNIN_URL = "/login";
export const SIGNUP_URL = "/register";
export const LOGOUT_URL = "/logout";

/**
 * User GET
 */
export const PROFILE_URL = "/profile";


/**
 * PRODUCT GET
 */
export const PRODUCT_URL = "/product";
export const SEARCH_URL = "/search";
export const CATEGORY_URL = "/category";
export const RATING_URL = "/rating";
export const PRICE_URL = "/price";
export const RANGE_URL = "/range";
export const PAGINATION_URL = "/pagination";
export const CHECKOUT_URL = "/checkout";

/**
 * Mail
 */
export const EMAIL = 'sarvesh.smcs2@gmail.com';

/**
 * Social
 */
export const GMAIL_CLIENTID = "496649971871-t9ed313fksf66p2335q5aumong4p0ihg.apps.googleusercontent.com";
export const GITHUB_CLIENTID = "";
export const FACEBOOK_CLIENTID = "";
export const LINKEDIN_CLIENTID = "";


