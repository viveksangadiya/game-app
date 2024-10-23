import React from "react";
import GameCard from "./GameCard";
import "../styles/GameSection.css";

const GameSection = () => {
  return (
    <div className="games-section">
      <GameCard title="Rummy ARES" img="rummy1.png" />
      <GameCard title="Rummy 334" img="rummy2.png" />
      <GameCard title="Rummy Regal" img="rummy3.png" />
    </div>
  );
};

export default GameSection;
