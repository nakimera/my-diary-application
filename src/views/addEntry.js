import React from 'react';
import AddEntry from '../components/entries/addEntry';

const UserEntry = (props) => (
    <React.Fragment>
      <AddEntry {...props} />
    </React.Fragment>
);

export default UserEntry;
