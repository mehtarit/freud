import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AfflictionCard from './AfflictionCard'

import AfflictionsApi from '../../api/AfflictionsApi'

class Afflictions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            afflictions: AfflictionsApi.getAll()
        };
    }

    render() {
        return (
            <div className="Afflictions">
                <h1>I need help with...</h1>
                <div className="AfflictionCardWrapper">{this.state.afflictions.map((affliction, index) => (
                    <Link to='/resources' style={{ textDecoration: 'none' }}
                        key={index}><AfflictionCard
                            key={index}
                            image={affliction.imageUrl}
                            afflictionPrompt={affliction.prompt} /></Link>
                ))
                }</div>
            </div>
        );
    }
}

export default Afflictions;
