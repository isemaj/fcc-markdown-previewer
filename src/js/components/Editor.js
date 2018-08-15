import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.props.changeHandler(e.target.value)
  }

  render() {
    const markdown = this.props.markdown;
    const update = this.update;
  
    return ( 
    <div className = "left-pane" >
      <textarea 
        id = "editor"
        onChange = { update } 
        value = { markdown }
      /> 
      </div >
    );
  }
}

export default Editor;