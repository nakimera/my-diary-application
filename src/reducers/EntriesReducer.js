import { ADD_ENTRY, FETCH_ENTRIES, FETCH_ENTRY } from '../actions/types';

const initialState = {
  entry:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entry: action.payload,
      };
      case FETCH_ENTRIES:
        return{
          ...state,
          entry:action.payload,
          
        };
      case FETCH_ENTRY:
        return {
          ...state,
          entry: action.payload,
        };
    default:
    return state;
  }
};
