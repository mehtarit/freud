import React, { Component } from 'react';

import Header from './Header';
import LandingButton from './LandingButton'
import M from '../ConversationComponent'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Landing">
                <Header headerText="The Mental Health Directory" />
                <LandingButton buttonText="Help!" />
                <M />
            </div>
        );
    }
}

export default Landing;
