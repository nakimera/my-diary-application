import React, { Component } from 'react';
import NavBar from '../common/navBar';
import InfoCard from './infoCard';
import LoginForm from './loginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container container-main centered">
            <InfoCard />
            <LoginForm {...this.props} />
          </div>
      </React.Fragment>
    );
  }
}

export default Login;
