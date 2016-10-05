import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './redux/store/configureStore';
import babel from 'babel-polyfill';
import styles from './scss/style.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
ReactDOM.render(
    <Root store={configureStore()} />,
    document.getElementById('search-app')
);
