import React from "react";
import "./sidebar.scss";
import { Spacer } from "../index";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BsFillCartFill } from "react-icons/bs";

const Sidebar = () => {
  const links = [
    {
      title: "Main",
      links: [
        {
          name: "Home",
          icon: <AiFillHome />,
          dest: "",
        },
        {
          name: "Users",
          icon: <ImUsers />,
          dest: "users",
        },
        {
          name: "Products",
          icon: <BsFillCartFill />,
          dest: "products",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <Spacer height="1.5rem" />
      <div className="logo">
        <img src="./astudio-logo.png" alt="site logo" />
      </div>
      <Spacer height="3rem" />
      <div className="navigation">
        {links.map((item) => (
          <div key={item.title}>
            <p className="links-title">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.dest}`}
                key={link.name}
                onClick={{}}
                // style={({ isActive }) => ({
                //   backgroundColor: isActive ? currentColor : "",
                // })}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
