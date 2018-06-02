import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class LandingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Button variant="raised" color="primary">{this.props.buttonText}</Button>
        );
    }
}

LandingButton.propTypes = {
    buttonText: PropTypes.string
}

export default LandingButton;
