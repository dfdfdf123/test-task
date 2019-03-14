import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const points = handleActions({
    [actions.addPoint](state, { payload: { point } }) {
        return { ...state, [point.id]: point };
    },
    [actions.removeTask](state, { payload: { id } }) {
        return _.omit(state, id);
    },
}, {});

const rootReducer = combineReducers({
    points,
    form: formReducer,
});

export default rootReducer;