import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Route, Switch, Link } from "react-router-dom";
import "./FavePage.css";

const FavePage = (props) => {
  return (
    <div className="FavePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="flex-h align-flex-end">
        <FavePage
          colors={props.colors}
        />
      </div>
      <footer className="header-footer">
        {props.winTries
          ? `You Won in ${props.winTries} Guesses!`
          : "Good Luck!"}
      </footer>
    </div>
  );
};

export default FavePage;
