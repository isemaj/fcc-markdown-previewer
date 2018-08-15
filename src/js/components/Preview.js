import React, {Component} from 'react'
import PropTypes from 'prop-types';
import showdown from 'showdown';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      converter: new showdown.Converter({
        tables: 'true',
        openLinksInNewWindow: 'true',
        simpleLineBreaks: 'true'
      })
    }
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return {__html: this.state.converter.makeHtml(this.props.markdown)}
  }

  render() {
    const renderHTML = this.createMarkup();
    return (
      <div className="right-pane">
        <p id="preview" dangerouslySetInnerHTML={renderHTML}></p>
      </div>
    );
  }
}

export default Preview;
