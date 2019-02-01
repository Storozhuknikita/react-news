import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import configStore from './store/configStore';

import App from './components/app/app';

const store = createStore(() => {}, {});

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
