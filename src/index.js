import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './configureStore';
import { startGetAll } from './usersAction';
import { Provider } from 'react-redux';
const store = configureStore()
store.subscribe(()=>{
    console.log(store.getState()) 
})
store.dispatch(startGetAll())
const jsx=<Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

