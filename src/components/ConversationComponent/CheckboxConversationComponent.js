import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
    root: {
        color: "#E37B40",
        "&$checked": {
            color: "#E37B40"
        }
    },
    checked: {},
    size: {
        width: 40,
        height: 40
    },
    sizeIcon: {
        fontSize: 20
    }
};

class CheckboxConversationComponent extends React.Component {
    state = {
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedG}
                            onChange={this.handleChange("checkedG")}
                            value="checkedG"
                            classes={{
                                root: classes.root,
                                checked: classes.checked
                            }}
                        />
                    }
                />
            </FormGroup>
        );
    }
}

CheckboxConversationComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxConversationComponent);
