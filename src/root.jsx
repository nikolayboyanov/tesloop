import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';
import App from './components/app';
import configureStore from './redux/store/configureStore'
const store = configureStore()
export default function Root ({
    store
}) {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
