import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';


import Header from './Header';
import LandingButton from './LandingButton';
import Zipcode from './Zipcode';

import V1 from '../../images/V1.png';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Landing">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <img src={V1} />
                    </Grid>
                    <Grid item xs={6}>
                        <Zipcode zipText="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/resources' style={{ textDecoration: 'none' }}>
                            <LandingButton buttonText="Go" />
                        </Link>
                    </Grid>

                    {/* <Header headerText="The Mental Health Directory" /> */}

                </Grid>

            </div>
        );
    }
}

export default Landing;
