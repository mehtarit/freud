import React, { Component } from 'react';
import ConversationComponent from './Component';


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
          <ConversationComponent
            type="text"
            prompt="ldadfsol"
            answers={['hi', 'how', 'are', 'you']}
          />
        );
    }
}
