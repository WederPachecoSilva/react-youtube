import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { searchVideo as videos, selectedVideo } from './reducers/videoReducer';

const reducer = combineReducers({ videos, selectedVideo })

export default createStore(reducer, {}, applyMiddleware(thunk, logger));

