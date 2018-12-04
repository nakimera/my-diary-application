import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userSignupAction from '../../actions/signUp';

class SignupForm extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  };

  handleState = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  };

  handleSignup = e => {
    const user = {
        username: this.state.user.username,
        email_address: this.state.user.email,
        password: this.state.user.password,
        confirm_password: this.state.user.confirmPassword,
    };
    this.props.userSignupAction(user);
  };

  render() {
    return (
      <div className='form-auth'>
        <div className='form-title'>Signup</div>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={this.handleState}
        />
        <input
          type='text'
          placeholder='example@domain.com'
          name='email'
          onChange={this.handleState}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={this.handleState}
        />
        <input
          type='password'
          placeholder='confirm password'
          name='confirmPassword'
          onChange={this.handleState}
        />
        <button className='btn-auth' onClick={this.handleSignup}>
          Signup
        </button>
        <div className='form-footer'>
          Have an account? <Link to='/'>Login</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  { userSignupAction }
  )(SignupForm);
