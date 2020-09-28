import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./FavePage.css";

const FavePage = (props) => {
  return (
    <div className="FavePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="flex-h align-flex-end">
        <FavePage colors={props.colors} />
        {props.user && (
          <Link className="btn btn-default FavePage-link-margin" to="/music">
            Music
          </Link>
        )}
      </div>
    </div>
  );
};

export default FavePage;