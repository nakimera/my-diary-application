import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { LoginForm } from '../components/authentication/loginForm';

const store = configureStore([thunk])({
  user: {},
  status: 'none'
});

let wrapper;
const loginAction = jest.fn();

describe('Login Component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <LoginForm loginAction={loginAction} email='none' password='none' />
        </Router>
      </Provider>
    );
  });

  it('should mount component without crashing', () => {
    const props = { handleSubmit: jest.fn(), userLoginAction: jest.fn() };
    const component = shallow(<LoginForm store={store} {...props} />);
    component.find('#submit').simulate('click');
    component.find('#email').simulate('change', {
      target: { name: 'email', value: 'crush@prossie.com' }
    });
    component.setProps({ user: { user: { status: 200 } } });
  });
});
