export default validate = (ch) => {
    switch(ch) {
        case 1: 
            console.log('1');
            break;
        default : 
            console.log('default');
    }
}

import ERRORS from '../config/errors';

/**
 * This file contains form field related validations
 */

const types = {
  EMAIL: 'email',
  PHONE: 'phone',
  TEXT: 'text',
  PASSWORD: 'password',
  CONFIRMPASSWORD: 'confirmpassword',
  USERID: 'userid',
  OTP: 'otp',
};
function validate(options) {
  const { type, value, isMandatory, minLength, maxLength, matchingValue } = options;
  switch (type.toLowerCase()) {
    case types.EMAIL:
      return validateEmail(value, isMandatory);
    case types.PHONE:
      return validatePhone(value, isMandatory, minLength, maxLength);
    case types.OTP:
      return validateOTP(value, isMandatory, minLength, maxLength);
    case types.TEXT:
      return validateNonEmpty(value, isMandatory, minLength, maxLength);
    case types.PASSWORD:
      return validatePassword(value, isMandatory, minLength, maxLength);
    case types.CONFIRMPASSWORD:
      return validateConfirmPassword(value, matchingValue, isMandatory, minLength, maxLength);
    case types.USERID:
      if (isNaN(value)) {
        return validateEmail(value, isMandatory);
      } else {
        return validatePhone(value, isMandatory, minLength, maxLength);
      }
    default:
      return ({ status: 'Success', message: null });

  }
}

/**
 * Handling validators
 */


// Mobile number validator
function validatePhone(phone, isMandatory, minLength, maxLength) {
  if (phone) {
    if (!isNaN(phone)) {
      if (minLength && (phone.toString().length < minLength)) {
        return ({ status: 'Failure', message: ERRORS.phone.invalid });
      } else if (maxLength && (phone.toString().length > maxLength)) {
        return ({ status: 'Failure', message: ERRORS.phone.invalid });
      }
      return ({ status: 'Success', message: null });
    } else {
      return ({ status: 'Failure', message: ERRORS.phone.invalid });
    }
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.phone.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

function validateOTP(otp, isMandatory, minLength, maxLength) {
  if (otp) {
    if (!isNaN(otp)) {
      if (minLength && (otp.toString().length < minLength)) {
        return ({ status: 'Failure', message: ERRORS.otp.invalid });
      } else if (maxLength && (otp.toString().length > maxLength)) {
        return ({ status: 'Failure', message: ERRORS.otp.invalid });
      }
      return ({ status: 'Success', message: null });
    } else {
      return ({ status: 'Failure', message: ERRORS.otp.invalid });
    }
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.otp.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

// Password field validator
function validatePassword(password, isMandatory, minLength, maxLength) {
  if (password) {
    if (minLength && (password.length < minLength)) {
      return ({ status: 'Failure', message: ERRORS.password.invalid(minLength, 'minimum') });
    } else if (maxLength && (password.length > maxLength)) {
      return ({ status: 'Failure', message: ERRORS.password.invalid(maxLength, 'maximum') });
    }
    return ({ status: 'Success', message: null });
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.password.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

// Required field validator
function validateNonEmpty(text, isMandatory, minLength, maxLength) {
  if (text) {
    if (minLength && (text.length < minLength)) {
      return ({ status: 'Failure', message: ERRORS.common.invalid(minLength, 'minimum') });
    } else if (maxLength && (text.length > maxLength)) {
      return ({ status: 'Failure', message: ERRORS.common.invalid(maxLength, 'maximum') });
    }
    return ({ status: 'Success', message: null });
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.common.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

// email validator
export function validateEmail(email, isMandatory) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
  if (email) {
    if (emailRegex.test(email)) {
      return ({ status: 'Success', message: null });
    } else {
      return ({ status: 'Failure', message: ERRORS.email.invalid });
    }
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.email.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

// confirm password field validator
function validateConfirmPassword(confirmPassword, password, isMandatory, minLength, maxLength) {
  if (confirmPassword) {
    if (minLength && (confirmPassword.length < minLength)) {
      return ({ status: 'Failure', message: ERRORS.password.invalid(minLength, 'minimum') });
    } else if (maxLength && (confirmPassword.length > maxLength)) {
      return ({ status: 'Failure', message: ERRORS.password.invalid(maxLength, 'maximum') });
    } else if (confirmPassword !== password) {
      return ({ status: 'Failure', message: ERRORS.password.notMatch });
    }
    return ({ status: 'Success', message: null });
  } else {
    if (isMandatory) {
      return ({ status: 'Failure', message: ERRORS.password.required });
    }
    else {
      return ({ status: 'Success', message: null });
    }
  }
}

export {
  types,
  validate,
};