import React from 'react';
import './App.css';
import SignUpPage from "../SignUpPage/SignUpPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to The National and Wine</h2>
        <a
          className="App-link"
          href="https://americanmary.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about The National
        </a>
      </header>
    </div>

  )
}

export default App;
