import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
});

function ResultTag(props) {
    const { classes } = props;
    return (
        <Chip label={props.label} className={classes.chip} />
    );
}

ResultTag.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
};

export default withStyles(styles)(ResultTag);