import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: 'React'
    };
  };
  render() {
    return (
      <div>
          <h1>CV Generator</h1>
          <PersonalInfo />
          <Experience />
      </div>
    );
  }
}

export default App;
