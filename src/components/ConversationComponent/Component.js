import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import "./styles.css";
import { Link } from "react-router-dom";
import LandingButton from "../Landing/LandingButton";

import CheckboxConversationComponent from "./CheckboxConversationComponent";
import RadioConversationComponent from "./RadioConversationComponent";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class ConversationComponent extends React.Component {
  answerList = this.props.answers.map((answer, index) => {
    if (this.props.type === "radio") {
      return (
        <FormControlLabel
          key={index}
          control={<RadioConversationComponent value={answer} />}
          label={answer}
        />
      );
    }
    return (
      <FormControlLabel
        key={index}
        control={<CheckboxConversationComponent key={index} value={answer} />}
        label={answer}
      />
    );
  });

  render() {
    return (
      <div className="ConversationComponent">
        {
          <div className="ConversationCentered">
            <h1 className="page-header"> {this.props.prompt} </h1>
            {this.props.type === "text" ? (
              <div>
                <TextField />
              </div>
            ) : (
              <FormControl component="fieldset">
                <FormGroup>{this.answerList}</FormGroup>
              </FormControl>
            )}
            {this.props.next === null ? (
              <Link to="/results" style={{ textDecoration: "none" }}>
                <LandingButton buttonText="Submit" />
              </Link>
            ) : (
              <Link to={this.props.next} style={{ textDecoration: "none" }}>
                <LandingButton buttonText="Next" />
              </Link>
            )}
          </div>
        }
      </div>
    );
  }
}

ConversationComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConversationComponent);
