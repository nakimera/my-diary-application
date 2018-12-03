import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import NavBar from '../common/navBar';
import AddArticleButton from '../entries/addArticleButton';
import fetchEntry from '../../actions/fetchEntry';

class ViewEntry extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
         this.props.fetchEntry(this.props.match.params.id);
      }
    }

  render() {
      let title;
      let details;
      if(this.props.entry.data){
       title = this.props.entry.data.data.title;
       details = renderHTML(this.props.entry.data.data.details);
      }
    return (
      <React.Fragment>
        <NavBar />
        <div className="container container-home">
            <div className='view-article-card'>
                <div className='article-title'>
                  {title}
                </div>
                <div className='article-body'>
                   {details}
                </div>
            </div>
        </div>
        <AddArticleButton />
      </React.Fragment>
    );
  }
}

ViewEntry.propTypes = {
    fetchEntry: PropTypes.func.isRequired,
    entry: PropTypes.object.isRequired,
  }

const mapStateToProps = state => ({
    entry: state.entry.entry,
  })
  
  export default connect(
    mapStateToProps,
    { fetchEntry }
  )(ViewEntry);

