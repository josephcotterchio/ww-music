import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import FavePage from "../FavePage/FavePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

class App extends Component {
  state = {
    play: false,
  };
  FavePage = new Audio(this.props.url);

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

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
