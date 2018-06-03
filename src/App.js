import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import './styles/App.css';
import Landing from './components/Landing/Landing'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="App">
//         <Landing />
//       </div>
//     );
//   }
// }
