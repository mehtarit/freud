import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ResourceCard from './ResourceCard'

import ResourcesApi from '../../api/ResourcesApi'
import './styles.css'

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
                <div className="ResourceCardWrapper">
                    {
                        this.state.resources.map((resource, index) => (
                            <Link
                                to='/conversation/0'
                                style={{ textDecoration: 'none' }}
                                key={index}>
                                <ResourceCard
                                    key={index}
                                    image={resource.imageURL}
                                    resourceTitle={resource.resourceTitle}
                                    resourceSubtext={resource.resourceSubtext} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Resources;
