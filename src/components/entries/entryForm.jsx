import React, { Component } from 'react';
import Editor from 'react-medium-editor';
import { connect } from 'react-redux';
import addEntry from '../../actions/addEntry';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class EntryForm extends Component {

  state = {
    title: '',
    details: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry.entry.message === 'Entry successfully added') {
      nextProps.history.push('/homepage');
    }
  }

  handleChange = (text, medium) => {
    this.setState({details: text});
  }

  
  onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
  }

  handleSubmit =(e) => {
    const entry = {
        title: this.state.title,
        details: this.state.details,
    };
    this.props.addEntry(entry);
    }   
    
  render() {
    return (
      <React.Fragment>
        <div className='article-form'>
          <input
            type='text'
            placeholder='Add title'
            name='title'
            onChange={this.onChange}
          />
          <Editor
          className='text-editor'
          name='details'
          onChange={this.handleChange}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor']}}}
        />
          <button onClick={this.handleSubmit}>Save</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    entry: state.entry,
  });

export default connect(
    mapStateToProps,
    { addEntry }
    )(EntryForm);  

