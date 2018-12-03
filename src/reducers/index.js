import { combineReducers } from 'redux';
import signupReducer  from './signupReducer';
import loginReducer from './loginReducer';
import addEntryReducer from './addEntryReducer'; 

export default combineReducers({
    user: signupReducer,
    login: loginReducer,
    entry: addEntryReducer,
});

