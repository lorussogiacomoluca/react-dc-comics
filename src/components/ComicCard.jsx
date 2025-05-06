const ComicCard = (props) => {
  return (
    <div className="comic-card">
      <img src={props.src} alt="" />
      <div className="p">{props.name}</div>
    </div>
  );
};

export default ComicCard;
