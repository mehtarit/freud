import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    input: {
        color: '#fff'
    },
};

function Zipcode(props) {
    return (
        <TextField
            id="with-placeholder"
            label="Enter your zipcode"
            placeholder="zipcode"
            InputProps={{
                className: props.classes.input
            }}
            margin="normal"
        />
    );
}

Zipcode.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Zipcode);