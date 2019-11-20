import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { store } from './redux/store'
import * as serviceWorker from './serviceWorker';

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.render(
<AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
        <App />
    </Provider>
</AlertProvider>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
