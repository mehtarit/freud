import React, { Component } from 'react';

import ResourceCard from './ResourceCard'

import ResourcesApi from '../../api/ResourcesApi'

class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: ResourcesApi.getAll()
        };
    }

    render() {
        return (
            <div className="Resources">
                <h1>I'm looking for...</h1>
                <div className="ResourceCardWrapper">{this.state.resources.map(resource => (
                    <ResourceCard
                        key={resource.id}
                        resourceTitle={resource.resourceTitle}
                        resourceSubtext={resource.resourceSubtext} />
                ))
                }</div>
            </div>
        );
    }
}

export default Resources;
