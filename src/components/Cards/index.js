import React from "react";
import "./style.css";

const Cards = ({ card, clickHandel }) => {
  let classCard;
  if (card.matched) {
    classCard = "flip-card-inner disabled";
  } else if (card.flipped) {
    classCard = "flip-card-inner flipped";
  } else {
    classCard = "flip-card-inner";
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
        <div className="flip-card-back flipped">
          <img src={card.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
