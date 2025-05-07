import React from "react";

const Navbar = (props) => {
  //Variable for generating and rendering list of
  const navbarMenu = props.links.map((link) => (
    <li key={`link-${link.id}`} className={link.current ? "active" : ""}>
      <a href={link.href}>{link.label}</a>
    </li>
  ));

  return (
    <div className="menu">
      <ul>{navbarMenu}</ul>
    </div>
  );
};

export default Navbar;
