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
      <ul>
        <li>
          <a href="#">Characters</a>
        </li>
        <li className="active">
          <a href="#">Comics</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Collectibles</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Fans</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
