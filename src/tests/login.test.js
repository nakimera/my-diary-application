import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import UserLogin from '../views/login';
import Login from '../components/authentication/login';
import NavBar from '../components/common/navBar';
import loginReducer from '../reducers/loginReducer';
import * as actions from '../actions/types';
import userLoginAction from '../actions/login';

it('Login page renders without fail', () => {
  shallow(<UserLogin />);
});

it('Login component renders without fail', () => {
  shallow(<Login />);
});

it('NavBar component renders without fail', () => {
    shallow(<NavBar />);
  });
  
describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual({
            user: {}
        })
    })

    it('should handle LOGIN_USER', () => {
        const initialState = {
            user: {},
          };
        expect(loginReducer(initialState,{
            type: actions.LOGIN_USER,
            payload: {
                email: 'test@test.com',
                password: 'testpassword',
            }
        })).toEqual({
            user: {
                    email: 'test@test.com',
                    password: 'testpassword',
                }
            })
    })
  });

//   Test login action

const mockStore = configureStore([thunk]);
const store = mockStore();
const payload = {
    status: 200,
};
const url = 'https://my-diary-app-np.herokuapp.com/api/v1/auth/login';
const expectedData = {
    "email": "test@test.com", "password": "testpassword",
}
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('login actions', () => {

  beforeEach(() => {
      store.clearActions();
  });
})

describe ('userLoginAction', () => {
    it('Dispatches the correct action and payload', async () => {
      const expectedActions = [{
        type: actions.LOGIN_USER, 
        payload: payload,
      }];
      fetchMock.post(url, expectedData);
      store.dispatch(userLoginAction(payload));
      await flushAllPromises();
      expect(store.getActions()).toEqual(expectedActions);
    });
    
})
