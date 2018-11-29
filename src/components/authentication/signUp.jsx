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
      console.log(this.props),
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="container-main">
            <InfoCard />
            <SignupForm {...this.props}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
