import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConversationComponent from './Component';


const Container = (props) => {
    return (
        <ConversationComponent
        type={props.type}
        prompt={props.prompt}
        answers={props.answers}
        next={props.next}
        />
    );
}

export default Container
