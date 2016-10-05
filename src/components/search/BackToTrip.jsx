import React, { PropTypes, Component } from 'react';
import mui, {AppBar, Styles} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
const defaultStyle = {
  marginLeft: 20
};

class BackToTrip extends Component {

  render() {
    return (
      <FlatButton
        label="Back To Trip"
        href="#"
        labelStyle={{fontSize: 20}}
        icon={<ArrowBack />}
    />

    );
  }
}

export default BackToTrip;
