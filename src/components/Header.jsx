import Logo from "./shared/Logo.jsx";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
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
        </div>
      </section>
    </header>
  );
};

export default Header;
