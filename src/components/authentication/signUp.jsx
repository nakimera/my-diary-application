import React, { Component } from 'react';
import NavBar from "../common/navBar";
import InfoCard from './infoCard';
import SignupForm from './signupForm';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container container-main centered">
            <InfoCard />
            <SignupForm {...this.props}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
