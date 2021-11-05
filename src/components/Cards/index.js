import React from "react";
import "./style.css";

const Cards = ({ card, clickHandel }) => {
  let classCard;
  let classImg;

  if (card.matched) {
    classCard = "flip-card-inner flipped";
    classImg="flip-card-back opicty";
  } else if (card.flipped)  {
    classCard = "flip-card-inner flipped";
    classImg="flip-card-back";
  } else {
    classCard = "flip-card-inner";
    classImg="flip-card-back";
  }

  const cardHandel = () => {
    clickHandel(card);
  };

  return (
    <div className="flip-card">
      <div className={classCard}>
        <div className="flip-card-front">
          <img
            onClick={cardHandel}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugbBr2ISywvGjmi9xuxl63fqCA1wPWX4VT9vL6yyX5_vmuoI5LYfOJPeZ3dX9UDy3cQs&usqp=CAU"
          ></img>
        </div>
        <div className={classImg}>
          <img src={card.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
