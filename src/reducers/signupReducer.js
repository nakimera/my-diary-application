import { SIGNUP_SUCCESS } from '../actions/types';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    default:
    return state;
  }
};
