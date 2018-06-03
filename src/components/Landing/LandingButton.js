import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        backgroundColor: '#DE5B49',
        borderRadius: 3,
        border: 0,
        color: '#fff',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    },
};

function LandingButton(props) {
    return (
        <Button variant="raised" className={props.classes.button}>{props.buttonText}</Button>
    );
}

LandingButton.propTypes = {
    buttonText: PropTypes.string,
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingButton);

