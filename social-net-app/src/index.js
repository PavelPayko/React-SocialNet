
import './index.css';
import 'normalize.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/redux-store'

let renderAll = (store) => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
renderAll (store)
store.subscribe(() => renderAll(store))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
