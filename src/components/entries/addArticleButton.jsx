import React from 'react';
import { Link } from 'react-router-dom';

const AddArticleButton = () => (
    <div>
       <Link to='/add_entry'><i className="fa fa-plus-circle" /></Link>
    </div>
)

export default AddArticleButton;