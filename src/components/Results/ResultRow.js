import React, { Component } from 'react';

import ResultTag from './ResultTag'

import AfflictionsApi from '../../api/AfflictionsApi'

class ResultRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            afflictions: AfflictionsApi.getAll()
        };
    }

    render() {
        return (
            <div className="ResultRow">
                <div className="AfflictionCardWrapper">{this.state.afflictions.map((affliction, index) => (
                    <ResultTag
                        key={index}
                        label={affliction.prompt} />
                ))
                }</div>
                <hr />
            </div>
        );
    }
}

export default ResultRow;
