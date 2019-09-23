import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemA from './components/itemA'
import ItemB from './components/itemB'
import ItemC from './components/itemC'
import ItemD from './components/itemD'
import ItemE from './components/itemE'
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div id="container"> 
      <ItemA /> 
      <ItemB />
      <ItemC />
      <ItemD />
      <ItemE />
  </div>
  );
}

export default App;
