import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Header from './Header';
import LandingButton from './LandingButton'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Landing">
                <Header headerText="The Mental Health Directory" />
                <Link to='/resources' style={{ textDecoration: 'none' }}>
                    <LandingButton buttonText="Help!" />
                </Link>
            </div>
        );
    }
}

export default Landing;
