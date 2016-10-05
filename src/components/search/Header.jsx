
import React, { PropTypes, Component } from 'react';
import mui, {AppBar, Styles} from 'material-ui';
const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <AppBar title="Tesloop Pick Up Points" style={headerStyle}/>
      </header>
    );
  }
}

const headerStyle = {
  backgroundColor: '#483B55'
}
export default Header;
