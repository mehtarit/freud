import React, { Component } from 'react';

import ResultCard from './ResultCard'

import ResultsApi from '../../api/ResultsApi'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: ResultsApi.getAllExcludeGenderAndExcludeNoImages("male")
        };
    }

    render() {
        return (
            <div className="Results">
                <h1>Results</h1>
                <div className="ResultCardWrapper">{this.state.results.map((result, index) => (
                    <ResultCard
                        key={index}
                        image={result.imageURL}
                        resultTitle={result.firstName}
                        resultSubtext={result.phoneNumber} />
                ))
                }</div>
            </div>
        );
    }
}

export default Results;
