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
        width: 300,
        margin: 15,
        height: 600
    },
    cardActions: {
        flexDirection: "column"
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

function ResourceCard(props) {
    const { classes } = props;

    return (
        <div>
            <Card raised className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Resource Image"
                />
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.resourceTitle}
                    </Typography>
                    <Typography component="p">
                        {props.resourceSubtext}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small">Select</Button>
                </CardActions>
            </Card>
        </div>
    );
}

ResourceCard.propTypes = {
    classes: PropTypes.object.isRequired,
    resourceTitle: PropTypes.string.isRequired,
    resourceSubtext: PropTypes.string
};

export default withStyles(styles)(ResourceCard);