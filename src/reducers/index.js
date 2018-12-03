import { combineReducers } from 'redux';
import signupReducer  from './signupReducer';
import loginReducer from './loginReducer';
import addEntryReducer from './EntriesReducer'; 

export default combineReducers({
    user: signupReducer,
    login: loginReducer,
    entry: addEntryReducer,
});

