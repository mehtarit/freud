import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/App.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <h1 className="App-title">{this.props.headerText}</h1>
            </header>
        );
    }
}

Header.propTypes = {
    headerText: PropTypes.string
}

export default Header;
