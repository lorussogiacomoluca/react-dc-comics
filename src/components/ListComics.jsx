import React from "react";
import ComicCard from "./ComicCard";

const ListComics = () => {
  return (
    <section id="comics-section">
      <div className="container">
        <div className="btn-title">CURRENT SERIES</div>
        <div className="comics-list">
          <ComicCard
            src="https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw"
            name="Element"
          />
        </div>
      </div>
    </section>
  );
};

export default ListComics;
