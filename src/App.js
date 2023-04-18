import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

import "./styles/app.css";


const App = () => {
  return (
    <div className='app-cont'>
        <h1>CV Generator</h1>
        <PersonalInfo />
        <Experience />
    </div>
  );
}


export default App;
