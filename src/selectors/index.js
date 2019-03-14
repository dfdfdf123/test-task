import { createSelector } from 'reselect';

export const getPoints = state => state.points;
export const tasksSelector = createSelector(
    getPoints,
    points => Object.values(points),
);