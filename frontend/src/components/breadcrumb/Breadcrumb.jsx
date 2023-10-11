import React from "react";
import "./breadcrumb.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name, url }) => {
  return (
    <div className="breadcrumb">
      <Link to={`/`} className="link">
        Home
      </Link>{" "}
      /
      <Link to={`/${url}`} className="link">
        {name}
      </Link>
    </div>
  );
};

export default Breadcrumb;
