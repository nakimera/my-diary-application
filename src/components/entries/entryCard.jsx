import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const entryCard = (props) => (
  <div className='entry-card'>
  <Link to={`/entry/${props.entry_id}`}>
    <div className='title'>
      <span>{props.title}</span>
    </div>
    <div className='body'>
      <span className='body-date'>{props.date}</span>
      <br />
      <br />
      <span className='body-text'>{renderHTML(props.details.substring(0,100))}</span>
    </div>
    </Link>
  </div>
);

export default entryCard;
