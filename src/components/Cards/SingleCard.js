export const SingleCard = (props) => {
  return (
    <a href="#" className="singleCard">
      <img src={props.imgUrl} alt={props.title} />
      <div className="content-box">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <div className="singleCard-cta">
          <a href={props.link}>{props.cta}</a>
        </div>
      </div>
    </a>
  );
};
