import React from 'react';
import './App.css';
import FavePage from "../FavePage/FavePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

class App extends React.Component {
  state = {
    play: false,
  };
   FavePage = new Audio(this.props.url);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>"I'm mixing weed with wine" -- The National</h1>
          <h2>The last music app you'll want</h2>
          <br />
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
    );
  }
}

export default App;
