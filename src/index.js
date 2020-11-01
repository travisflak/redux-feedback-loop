import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = 0, action) => {

    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    else{
        return state;
    }
} 

const understandingReducer = (state = 0, action) => {

    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    else{
        return state;
    }
} 

const supportReducer = (state = 0, action) => {

    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    else{
        return state;
    }
} 

const commentsReducer = (state = '', action) => {

    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    else{
        return state;
    }
} 


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
