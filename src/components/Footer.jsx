import logoBG from "../assets/img/dc-logo-BG.png";
const Footer = () => {
  return (
    <footer>
      <section id="footer-link">
        <div className="container">
          <div className="left">
            <div className="col">
              <h4>DC Comics</h4>
              <ul>
                <li>
                  <a href="">Characters</a>
                </li>
                <li>
                  <a href="">Comics</a>
                </li>
                <li>
                  <a href="">Movies</a>
                </li>
                <li>
                  <a href="">TV</a>
                </li>
                <li>
                  <a href="">Games</a>
                </li>
                <li>
                  <a href="">Videos</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
              <h4>shop</h4>
              <ul>
                <li>
                  <a href="">Shop DC</a>
                </li>
                <li>
                  <a href="">Shop DC Collectibles</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>DC</h4>
              <ul>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
                <li>
                  <a href="">Ad choise</a>
                </li>
                <li>
                  <a href="">Advertising</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">Subscriptions</a>
                </li>
                <li>
                  <a href="">Talent Workshops</a>
                </li>
                <li>
                  <a href="">CPSC Certificates</a>
                </li>
                <li>
                  <a href="">Ratings</a>
                </li>
                <li>
                  <a href="">Shop Help</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>SITES</h4>
              <ul>
                <li>
                  <a href="">DC</a>
                </li>
                <li>
                  <a href="">MAD Magazine</a>
                </li>
                <li>
                  <a href="">DC Kids</a>
                </li>
                <li>
                  <a href="">DC Unvierse</a>
                </li>
                <li>
                  <a href="">DC Power Visa</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <img src={logoBG} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
