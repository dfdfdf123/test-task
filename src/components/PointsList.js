import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { pointsSelector } from '../selectors';

const mapStateToProps = (state) => {
    const props = {
        points: pointsSelector(state),
    };
    return props;
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
                    <li key={id}>
                        {text}
                        <button type="button" data-test="point-remove" className="btn-close" onClick={this.handleRemovePoint(id)}>
                            <span>&times;</span>
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(PointsList);