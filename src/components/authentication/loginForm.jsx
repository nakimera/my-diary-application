import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import userLoginAction from '../../actions/login';

class LoginForm extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user.message === "Welcome to your diary nakimeraprossie!") {
      nextProps.history.push('/homepage');
    }

  }
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

  handleLogin = e => {
    const user = {
        email_address: this.state.user.email,
        password: this.state.user.password,
    };
      this.props.userLoginAction(user);
  };

  render() {
    return (
      <div className="form-auth">
        <div className="form-title">Login</div>
        <input
          type="text"
          placeholder="example@domain.com"
          name="email"
          onChange={this.handleState}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleState}
        />
        <button className="btn-auth" onClick={this.handleLogin}>
          Login
        </button>
        <div className="form-footer">
          Have no account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login,
});

export default connect(
  mapStateToProps,
  { userLoginAction }
  )(LoginForm);
