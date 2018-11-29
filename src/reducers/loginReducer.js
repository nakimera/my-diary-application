import { LOGIN_USER } from '../actions/types';

const initialState = {
  user: {},
  // isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
    return state;
  }
};
