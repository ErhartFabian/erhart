import React from 'react';
import './App.css'
import './Components/Styles/Global.css';
import Intro from "./Components/Intro";
import About from './Components/About';
import Side from './Components/Side';
import School from './Components/School';
import Experience from './Components/Experience';

function App() {

  return (
    <div className="App">
      <div id='container'>
        <Intro></Intro>
        <About></About>
        <School></School>
        <Experience></Experience>
      </div>
      <Side></Side>
    </div>
  );
}

export default App;
