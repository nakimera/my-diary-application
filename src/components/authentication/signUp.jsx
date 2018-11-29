import React, { Component } from 'react';
import NavBar from "../common/navBar";
import InfoCard from './infoCard';
import SignupForm from './signupForm';

class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="container-main">
            <InfoCard />
            <SignupForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
