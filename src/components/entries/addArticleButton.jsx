import React from 'react';
import { Link } from 'react-router-dom';

const AddArticleButton = () => (
    <React.Fragment>
       <Link to='/add_entry'><i className='fa fa-plus-circle' /></Link>
    </React.Fragment>
)

export default AddArticleButton;