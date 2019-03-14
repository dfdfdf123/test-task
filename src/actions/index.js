import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addPoint = createAction('POINT_ADD', point =>
    ({ point: { ...point, id: _.uniqueId() } }));
export const removePoint = createAction('POINT_REMOVE');
