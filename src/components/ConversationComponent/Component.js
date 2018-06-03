import React from 'react';
import Component from './Component';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import styles from './styles.css';


const ConversationComponent = (props) => {
    const answerList = props.answers.map((answer, i) => {
        if (props.type === 'radio') {
            return (
            <FormControlLabel
            control={
              <Radio
                key={i}
                value={answer}
              />
            }
            label={answer}
          />
            )
        }
        return (
            <FormControlLabel
            control={
              <Checkbox
                key={i}
                value={answer}
              />
            }
            label={answer}
          />
        )
    });

    return (
        <div>
            <h1> {props.prompt} </h1>
            {
                props.type === 'text'
                ?
                    <TextField></TextField>
                : 
                    <FormControl component="fieldset">
                        <FormGroup>
                            {answerList}
                        </FormGroup>                       
                    </FormControl>
            }

            <div>
            {

            props.next === 'null' 
            ?
             <Link to='/results' style={{ textDecoration: 'none' }}>
                    <LandingButton buttonText="Submit" />
            :
            <Link to={props.next} style={{ textDecoration: 'none' }}>
                    <LandingButton buttonText="Next" />

            }
            </div>

       </div>


    )
}

export default ConversationComponent
