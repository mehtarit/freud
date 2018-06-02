import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button>{this.props.buttonText}</button>
        );
    }
}

LandingButton.propTypes = {
    buttonText: PropTypes.string
}

export default LandingButton;
