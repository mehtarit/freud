import React, { Component } from 'react';

import ResultTag from './ResultTag'

import AfflictionsApi from '../../api/AfflictionsApi'
import ResourcesApi from '../../api/ResourcesApi'

class ResultRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            afflictions: AfflictionsApi.getAll(),
            resources: ResourcesApi.getAll()
        };
    }

    render() {
        return (
            <div className="ResultRow">
                <div className="AfflictionsTagsWrapper">{this.state.afflictions.map((affliction, index) => (
                    <ResultTag
                        key={index}
                        label={affliction.prompt} />
                ))
                }</div>
                <hr />
                <div className="ResourcessTagsWrapper">{this.state.resources.map((resource, index) => (
                    <ResultTag
                        key={index}
                        label={resource.resourceTitle} />
                ))
                }</div>
                <hr />
            </div>
        );
    }
}

export default ResultRow;
