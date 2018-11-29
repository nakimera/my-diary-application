import React, { Component } from 'react';
import NavBar from '../common/navBar';
import AddArticleButton from '../entries/addArticleButton';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="container-main">
            <AddArticleButton />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
