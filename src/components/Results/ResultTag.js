import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

function ResultTag(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Chip label={props.label} className={classes.chip} />
        </div>
    );
}

ResultTag.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
};

export default withStyles(styles)(ResultTag);