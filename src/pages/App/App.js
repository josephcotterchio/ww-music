import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "../SignUpPage/SignUpPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    }
  }
    
  // FavePage = new Audio(this.props.url);
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };


  render() {
    return (
      <div className="App-header-footer">
      <NavBar />
        <header className="header-footer">
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
          <Switch>
            <Route exact path='/signup' render={({ history }) => 
            <SignUpPage
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          }/>
          </Switch>
      </div>
    );
  }
}

export default App;
