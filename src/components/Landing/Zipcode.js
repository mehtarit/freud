import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Zipcode extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TextField
                id="with-placeholder"
                label="Enter your zipcode"
                placeholder="zipcode"
                className={this.props.zipText}
                margin="normal"
            />
        );
    }
}

Zipcode.propTypes = {
    zipText: PropTypes.string
}

export default Zipcode;
