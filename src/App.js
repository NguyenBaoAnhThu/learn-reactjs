import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Thu';
  const age = 20;
  const isMarried = true;
  const x = [1, 2, 3, 4];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nguyen Bao Anh Thu 123
        </p>
        <p>
          Xin chao {name} - {age}
        </p>
        
      </header>
    </div>
  );
}

export default App;
