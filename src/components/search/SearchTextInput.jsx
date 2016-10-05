import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from 'material-ui/FontIcon';
import { TextField } from 'material-ui';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import ActionSearch from 'material-ui/svg-icons/action/search';
const defaultStyle = {
  marginLeft: 20
};

class SearchTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleEnter(e) {
    const text = e.target.value.trim();
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
  }

  render() {
    return (
      <div className="search-block">
        <div className="inner-block">
          <span className="origin">Origin</span>
          <TextField className="search-text"
                    style={defaultStyle}
                    id="serach-text"
                    type="text"
                    hintText={this.props.placeholder}
                    underlineShow = {false}
                    autoFocus="true"
                    value={this.state.text}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleEnter.bind(this)} />
           <ActionSearch style={iconStyles} color={'#000020'} />
        </div>

      </div>

    );
  }
}
const iconStyles = {
  marginRight: 24,
  paddingLeft: 20,
  position:'absolute',
  top: 20,
  right: 20
};

SearchTextInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchTextInput;
