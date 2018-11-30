import React from 'react';
import renderHTML from 'react-render-html';

const entryCard = (props) => (
  <div className="entry-card">
    <div className="title">
      <span>{props.title}</span>
    </div>
    <div className="body">
      <span className="body-date">{props.date}</span>
      <br />
      <br />
      <span>{renderHTML(props.details.substring(0,100))}</span>
    </div><br />
  </div>
);

export default entryCard;
