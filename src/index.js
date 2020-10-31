import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = [], action) => {

    if(action.type === 'SET_FEELING') {
        return action.payload;
    } 
    else if(action.type === 'SET_FEELING'){
        return [...state, action.payload]
    }
    return state;
}
const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING'){
        return [...state, action.payload]
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT'){
        return [...state, action.payload]
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS'){
        return [...state, action.payload]
    }
    return state;
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
