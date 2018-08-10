import '../../css/Preview.scss'
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import showdown from 'showdown';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      converter: new showdown.Converter(),
      text: this.props.placeholder,
    }

    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return {__html: this.state.converter.makeHtml(this.state.text)}
  }

  render() {
    this.state.converter.setOption('tables', 'true');
    return (
      <div id="right">
        <p dangerouslySetInnerHTML={this.createMarkup()}></p>
      </div>
    );
  }
}

export default Preview;
