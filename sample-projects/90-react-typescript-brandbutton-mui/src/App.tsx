import React from 'react';
import logo from './logo.svg';
import './App.css';
import BrandButton from "./BrandButton";

function App() {
    const color= 'success';
    const variant = 'contained';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <h2>Welcome Peter</h2>
        <p>Today is { new Date().toDateString()}</p>
          <BrandButton color={'secondary'}>Click Button</BrandButton>
      </header>
    </div>
  );
}

export default App;
