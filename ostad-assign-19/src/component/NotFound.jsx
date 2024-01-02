import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="p-2">
        <h1 className="not-title">Oops!</h1>
        <h2 className="not-title2">Page not found!</h2>
        <p className="fs-4">You could either go back or go to homepage</p>
      </div>
      <Link to="/">
        <button className="btn btn-primary p-3 rounded-pill fs-4 text-white me-4">
          GO BACK
        </button>
      </Link>
      <Link to="/">
        <button className="btn btn-dark p-3 rounded-pill fs-4 text-white">
          HOME PAGE
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
