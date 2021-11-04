import React from "react";
import "./style.css";

const Cards = ({ card, clickHandel, add, index }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            onClick={() => {
              add.push(index);
              clickHandel(card);
            }}
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
