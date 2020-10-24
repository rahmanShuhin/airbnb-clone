import React from 'react';
import "./Card.css";
const Card = (props) => {
  const {img,title,desc}=props.x;
  return (
    <>
    {
      props.num!==1 ? <div className="card">
      <img src={img} alt={title}/>
      <div className="card__info">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>:<div className="card__1">
      <img src={img} alt={title}/>
      <div className="card__info__1">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
    }
    </>
  );
};

export default Card;