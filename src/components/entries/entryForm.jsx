import React, { Component } from 'react';
import Editor from 'react-medium-editor';

class EntryForm extends Component {

  state = {
    title: '',
    description: ''
  }

  handleChange = (text, medium) => {
    this.setState({description: text});
  }

  onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
  }

  handleSubmit =(e) => {
    const entry = {
        title: this.state.title,
        description: this.state.description,
    };
    console.log(entry)
    }   
  render() {
    return (
      <React.Fragment>
        <div className="article-form">
          <input
            type="text"
            placeholder="Add title"
            name="title"
            onChange={this.onChange}
          />
          <Editor
          className="text-editor"
          name="description"
          onChange={this.handleChange}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor']}}}
        />
          <button onClick={this.handleSubmit}>Save</button>
        </div>
      </React.Fragment>
    );
  }
}

export default EntryForm;
