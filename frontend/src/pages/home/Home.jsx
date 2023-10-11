import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to={`/users`} className="link">
        View all Users
      </Link>
      <Link to={`/products`} className="link">
        View all Products
      </Link>
    </div>
  );
};

export default Home;
