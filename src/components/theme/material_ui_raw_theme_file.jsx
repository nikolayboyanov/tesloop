import {cyan500, cyan700, lightBlack, pinkA200, grey100, grey500, darkBlack, white, grey300} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: lightBlack,
    accent1Color: '#906AB7',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3)
  },
  tabs:{
    backgroundColor: white,
    borderColor:'#906AB7',
    textColor:'#906aB7',
    fontSize: 20,
    selectedTextColor:'#483b55',
    opacity: '0'
  }
};
