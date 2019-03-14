import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getPoints } from '../selectors';

const mapStateToProps = (state) => {
    const points = getPoints(state);
    return { points };
};

const actionCreators = {
    removePoint: actions.removePoint,
};

class PointsList extends React.Component {
    handleRemovePoint = id => () => {
        const { removePoint } = this.props;
        removePoint({ id });
    }

    render() {
        const { points } = this.props;

        if (points.length === 0) {
            return null;
        }

        return (
            <ul>
                {points.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(PointsList);