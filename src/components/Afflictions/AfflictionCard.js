import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 175,
        maxWidth: 275,
        margin: 15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    pos: {
        marginBottom: 12,
    },
};

function AfflictionCard(props) {
    const { classes } = props;

    return (
        <div>
            <Card raised className={classes.card}>
                <CardActions>
                    <Button size="small">{props.afflictionPrompt}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

AfflictionCard.propTypes = {
    classes: PropTypes.object.isRequired,
    afflictionPrompt: PropTypes.string.isRequired,
};

export default withStyles(styles)(AfflictionCard);