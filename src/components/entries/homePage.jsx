import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../common/navBar';
import AddArticleButton from '../entries/addArticleButton';
import EntryCard from '../entries/entryCard';
import fetchEntries from '../../actions/fetchEntries';


class HomePage extends Component {

  componentDidMount() {
    this.props.fetchEntries();
  }
  
  render() {
    let showEntries;
    if(this.props.entry.data){
      var getEntries=this.props.entry.data.data
      showEntries=getEntries.map(entry=>(
        <React.Fragment key={entry.entry_id}>
          <EntryCard 
          title={entry.title}
          date={entry.entry_date}
          details={entry.details}
          />
        </React.Fragment>

      ));
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="container container-home">
            {showEntries}
            <AddArticleButton />
          </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  fetchEntries: PropTypes.func.isRequired,
  entry: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  entry: state.entry.entry,
})

export default connect(
  mapStateToProps,
  { fetchEntries }
)(HomePage);
