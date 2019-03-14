import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    const props = {
        text: state.text,
    };
    return props;
};

const actionCreators = {
    addPoint: actions.addPoint,
};

class NewPointForm extends React.Component {
    handleSubmit = (values) => {
        const { addPoint, reset } = this.props;
        const point = { ...values, id: _.uniqueId() };
        addPoint({ point });
        reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
                <Field name="text" required component="input" type="text" />
                <input type="submit" className="btn" value="Add point" />
            </form> 
        );  
    }
}

const ConnectedNewPointForm = connect(mapStateToProps, actionCreators)(NewPointForm);

export default reduxForm({
    form: 'newPoint',
})(ConnectedNewPointForm);
