import React, { Component } from 'react';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <a href="/">
          <span className="header-brand">My diary</span>
        </a>
      </div>
    );
  }
}

export default NavBar;
