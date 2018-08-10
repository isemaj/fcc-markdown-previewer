import '../../css/Editor.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: this.props.placeholder,
      change: this.props.changeHandler
    }
  }

  render() {
    return(
      <div id="left">
        <textarea
          id='editor'
          onChange={this.state.change}
          value={this.state.markdown}
          />
      </div>
    );
  }
}

// Editor.propTypes = {
//   markdown: PropTypes.string.isRequired
// }

export default Editor;
