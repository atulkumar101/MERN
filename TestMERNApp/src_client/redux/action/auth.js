import {} from '../../assets/constant';
/*
export const addCart = (cart) => {
    const action = {
        type: CART,
        cart
    }
    return action;
}
*/

export function loginUserSuccess(token) {
    localStorage.setItem('token', token);
    return {
      type: LOGIN_USER_SUCCESS,
      payload: {
        token: token
      }
    }
  }
  
  export function loginUserFailure(error) {
    localStorage.removeItem('token');
    return {
      type: LOGIN_USER_FAILURE,
      payload: {
        status: error.response.status,
        statusText: error.response.statusText
      }
    }
  }
  
  export function loginUserRequest() {
    return {
      type: LOGIN_USER_REQUEST
    }
  }
  
  export function logout() {
      localStorage.removeItem('token');
      return {
          type: LOGOUT_USER
      }
  }