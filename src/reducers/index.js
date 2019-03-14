import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const points = handleActions({
    [actions.addPoint](state, { payload: { point } }) {
        return { ...state, [point.id]: point };
    }
}, {});

const rootReducer = combineReducers({
    points
});

export default rootReducer;