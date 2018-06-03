import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function ResultCard(props) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contact Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.resultTitle}
                    </Typography>
                    <Typography component="p">
                        {props.resultSubtext}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Expand
          </Button>
                    <Button size="small" color="primary">
                        Contact
          </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ResultCard.propTypes = {
    classes: PropTypes.object.isRequired,
    imageUrl: PropTypes.string,
    resultTitle: PropTypes.string,
    resultSubtext: PropTypes.string
};

export default withStyles(styles)(ResultCard);