import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkIcon from '@material-ui/icons/Work';

const styles = {
    card: {
        width: 300,
        margin: 15,
        height: 800,
        position: 'relative'
    },
    media: {
        height: 0,
        paddingTop: '90.25%', // 16:9
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
    pos: {
        marginBottom: 12,
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
                <CardContent className="ResourceCard">
                    <Typography className="Title" gutterBottom variant="headline" component="h2">
                        {props.resultTitle}
                    </Typography>
                    <div className="Bio">
                        <Typography component="p">
                            {props.resultProfileBio.substring(0, 200) + "..."}
                        </Typography>
                    </div>
                    <hr />
                    <div className="IconSet">
                        <IconButton aria-label="Phone">
                            <PhoneIcon />
                        </IconButton>
                        <Typography component="p" className={classes.entryWithIconParagraph}>
                            {props.resultPhoneNumber}
                        </Typography>
                    </div>
                    <div className="IconSet">
                        <IconButton aria-label="Address">
                            <WorkIcon />
                        </IconButton>
                        <Typography component="p" className={classes.entryWithIconParagraph}>
                            {props.resultLocation}
                        </Typography>
                    </div>
                    <hr />
                    <Typography component="p">
                        {props.resultQualifications}
                    </Typography>
                </CardContent>
                <CardActions className="ResourceSelect">
                    <Button size="small">
                        Select
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ResultCard.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    resultTitle: PropTypes.string.isRequired,
    resultProfileBio: PropTypes.string.isRequired,
    resultPhoneNumber: PropTypes.string.isRequired,
    resultLocation: PropTypes.string.isRequired,
    resultQualifications: PropTypes.string.isRequired
};

export default withStyles(styles)(ResultCard);