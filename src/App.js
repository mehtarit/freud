import React, { Component } from 'react';
import './styles/App.css';
import ConversationApi from './api/ConversationApi';

import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: ConversationApi.getAll()
    };
  }


  render() {
    return (
      <div className="App">
        <Main
          dynamicQuestions={ConversationApi.getAll()}
        />
      </div>
    );
  }
}


export default App;
