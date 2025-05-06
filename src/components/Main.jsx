import Jumbotron from "./Jumbotron";
import ListComics from "./ListComics";

import MainIcons from "./MainIcons";

const Main = () => {
  return (
    <main>
      <section id="main-content">
        <Jumbotron />
        <ListComics />
      </section>
      <MainIcons />
    </main>
  );
};

export default Main;
