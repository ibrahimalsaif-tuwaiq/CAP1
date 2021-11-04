import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import "./style.css";

const Game = ({ cards }) => {
  //   const [choiceOne, setChoiceOne] = useState(null);
  const [turns, setTurns] = useState(0);
  const [match, setMatch] = useState(0);
  const [seconds, setSeconds] = useState(10);
  let choiceOne = null;
  let add = [];
  //   let time = 5;

  //   const [choiceTwo, setChoiceTwo] = useState(null);
  const [cardsArray, setCardsArray] = useState(cards);

  useEffect(() => {
    const newArray = cardsArray
      .concat(cardsArray)
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCardsArray(newArray);
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
    }
  });

  const setValues = () => {
    //   setChoiceOne(null);
    choiceOne = null;
    add = [];
  };

  const clickHandel = (card) => {
    if (choiceOne) {
      //   setChoiceTwo(card);
      game(card);
    } else {
      choiceOne = card;
      //   setChoiceOne(card);
    }
    console.log(add);
  };

  const completed = () => {
    if (cardsArray.every((card) => card.matched)) {
      console.log("win");
    }
  };

  const game = (card) => {
    if (choiceOne.name === card.name) {
      console.log("match");
      choiceOne.matched = true;
      card.matched = true;
      console.log(cardsArray);
      //   setChoice();
      setValues();
      setTurns((turn) => turn + 1);
      setMatch((match) => match + 1);
      completed();
    } else {
      //   setChoice();
      setValues();
      setTurns((turn) => turn + 1);
    }
  };

  return (
    <>
      <h1>{seconds}</h1>
      {cardsArray.map((card, index) => {
        return <Cards card={card} clickHandel={clickHandel} add={add} index={index} key={index} />;
      })}
    </>
  );
};

export default Game;
