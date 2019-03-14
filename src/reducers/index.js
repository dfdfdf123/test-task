import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const rootReducer = combineReducers({
    state: () => ({})
});

export default rootReducer;