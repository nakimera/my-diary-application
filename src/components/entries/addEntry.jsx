import React, { Component } from 'react';
import NavBar from '../common/navBar';
import EntryForm from '../entries/entryForm';

class AddEntry extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <div className='container-main'>
            <EntryForm {...this.props} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEntry;
