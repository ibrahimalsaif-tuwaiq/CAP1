import React, {useState} from "react";
import Game from "../Game";
import "./style.css";

const Easy = () => {
  const easyArray = [
    { id: 1, name: "pic1", image: "./img/p1.jpeg", matched: true },
    { id: 2, name: "pic2", image: "./img/p2.jpeg", matched: false },
    { id: 3, name: "pic3", image: "./img/p3.jpeg", matched: false },
  ];

  return (
    <div className="easyWrapper">
      <div className="easyGrid">
        <Game cards={easyArray}/>;
      </div>
    </div>
  );
};

export default Easy;
