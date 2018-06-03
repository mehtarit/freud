import React, { Component } from 'react';
import './styles/App.css';

import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const questions = [
      {
        type: 'checkbox',
        prompt: 'How are you feeling?',
        answers: ['goooooood', 'bad', 'great'],
      },
      {
        type: 'radio',
        prompt: 'How are you feeling?',
        answers: ['good', 'bad', 'gt'],
      },
      {
        type: 'input',
        prompt: 'How are you feeling?',
        answers: ['go', 'bad', 'great'],
      }
    ];
    return (
      <div className="App">
        <Main
          dynamicQuestions={questions}
        />
      </div>
    );
  }
}

export default App;
