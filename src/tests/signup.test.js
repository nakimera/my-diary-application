import React from 'react';
import { shallow, mount } from 'enzyme';
import InfoCard from '../components/authentication/infoCard';
import Register from '../components/authentication/signUp';
import SignUp from '../views/signup';
import signupReducer from '../reducers/signupReducer';


const data = {
    username: 'prossie',
    email: 'test@test.com',
    password: 'testpassword',
    confirmPassword: 'testpassword',
}

it("Infocard renders without fail", () => {
  mount(<InfoCard />);
});

it("Signup page renders without fail", () => {
  shallow(<Register />);
});

it("Signup view renders without fail", () => {
  shallow(<SignUp />);
});

describe('signup reducer', () => {
    it('should return the initial state', () => {
        expect(signupReducer(undefined, {})).toEqual({
            user: {}
        })
    })

    it('should handle SIGNUP_SUCCESS', () => {
        const initialState = {
            user: {}
          };
        expect(signupReducer(initialState,{
            type: "SIGNUP_SUCCESS",
            payload: data
        })).toEqual({
                user: {
                    username: 'prossie',
                    email: 'test@test.com',
                    password: 'testpassword',
                    confirmPassword: 'testpassword',
                }
            })
    })
  });




