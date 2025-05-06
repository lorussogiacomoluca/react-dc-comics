import first from "../assets/img/buy-comics-digital-comics.png";
import second from "../assets/img/buy-comics-merchandise.png";
import third from "../assets/img/buy-comics-subscriptions.png";
import fourth from "../assets/img/buy-comics-shop-locator.png";
import fifth from "../assets/img/buy-dc-power-visa.svg";

const Main = () => {
  return (
    <main>
      <section id="main-content">
        <div className="container">
          <h1>--&gt; Content goes here &lt;--</h1>
        </div>
      </section>
      <section id="main-icon">
        <div className="container">
          <div className="card">
            <div className="card-img">
              <img src={first} alt="" />
            </div>
            <div className="card-text">digital comics</div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={second} alt="" />
            </div>
            <div className="card-text">digital comics</div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={third} alt="" />
            </div>
            <div className="card-text">digital comics</div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={fourth} alt="" />
            </div>
            <div className="card-text">digital comics</div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={fifth} alt="DC Power Visa" />
            </div>
            <div className="card-text">digital comics</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
