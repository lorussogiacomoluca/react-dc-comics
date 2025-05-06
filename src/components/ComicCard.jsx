const ComicCard = (props) => {
  return (
    <div className="comic-card">
      <div className="comic-card-image">
        <img src={props.src} alt="" />
      </div>
      <div className="comic-card-text">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ComicCard;
