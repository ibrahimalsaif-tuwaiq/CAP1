import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import "./style.css";

const Game = ({ cards }) => {
  const [cardsArray, setCardsArray] = useState(cards);
  const [openCards, setOpenCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const newArray = cardsArray
      .concat(cardsArray)
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCardsArray(newArray);
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
    }
  });

  useEffect(() => {
    if (openCards.length === 2) {
      game();
    }
  }, [openCards]);

  useEffect(() => {
    if (cardsArray.every((card) => card.matched)) {
      console.log("win");
    }
  }, [cardsArray]);

  const clickHandel = (card) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, card.id]);
      setCardFlipped(card.id);
    } else {
      setOpenCards([card.id]);
      setCardFlipped(card.id);
    }
  };

  const setCardFlipped = (index) => {
    let newCardsArray = [...cardsArray];
    newCardsArray[index].flipped = true;
    setCardsArray(newCardsArray);
  };

  const setCardUnFlipped = (indexOne, indexTwo) => {
    let newCardsArray = [...cardsArray];
    newCardsArray[indexOne].flipped = false;
    newCardsArray[indexTwo].flipped = false;
    setCardsArray(newCardsArray);
  };

  const setCardMatched = (indexOne, indexTwo) => {
    setTimeout(() => {
      let newCardsArray = [...cardsArray];
      newCardsArray[indexOne].matched = true;
      newCardsArray[indexTwo].matched = true;
      setCardsArray(newCardsArray);
    }, 1000);
  };

  const game = () => {
    const [cardOne, cardTwo] = openCards;
    if (cardsArray[cardOne].name === cardsArray[cardTwo].name) {
      setCardMatched(cardOne, cardTwo);
      setTurns((turn) => turn + 1);
      setOpenCards([]);
    } else {
      setTurns((turn) => turn + 1);
      setTimeout(() => {
        setOpenCards([]);
        setCardUnFlipped(cardOne, cardTwo);
      }, 1000);
    }
  };

  return (
    <>
      <div className="timerCounter">
        <h1>{seconds}</h1>
      </div>
      <div className="easyGrid">
        {cardsArray.map((card, index) => {
          return (
            <Cards
              card={card}
              clickHandel={clickHandel}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      <div className="turnsCounter">
        <h1>{turns}</h1>
      </div>
    </>
  );
};

export default Game;
