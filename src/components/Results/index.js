import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import ResultRow from './ResultRow'
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
                <div className="ResultsHeaderWrapper">
                    <h1>Results</h1>
                </div>
                <ResultRow />
                <div className="ResultCardWrapper">{this.state.results.map((result, index) => (
                    <ResultCard
                        key={index}
                        image={result.imageURL}
                        resultTitle={result.title}
                        resultProfileBio={result.profileBio}
                        resultPhoneNumber={result.phoneNumber}
                        resultLocation={result.location}
                        resultQualifications={result.qualifications} />
                ))
                }</div>
            </div>
        );
    }
}

export default Results;
