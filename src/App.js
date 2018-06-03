import React, { Component } from 'react';
import './styles/App.css';

import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
