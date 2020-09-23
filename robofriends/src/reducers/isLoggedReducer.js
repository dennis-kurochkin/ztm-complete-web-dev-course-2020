import { SIGN_IN, LOG_OUT } from '../constants';

const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default isLoggedReducer;