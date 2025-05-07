import Navbar from "./Navbar.jsx";
import Logo from "./shared/Logo.jsx";
const navbarLinks = require("../assets/links.js");

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <Navbar links={navbarLinks} />
        </div>
      </section>
    </header>
  );
};

export default Header;
