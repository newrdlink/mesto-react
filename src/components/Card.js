import React from "react";

function Card({ card, handleCardClick }) {
  return (
    <li className="element">
      <img
        src={card.link}
        alt="Фотография"
        className="element__image"
        onClick={() => handleCardClick(card)}
      />
      <button type="button" className="element__basket"></button>
      <div className="element__content">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__likes">
          <button type="button" className="element__heart"></button>
          <span className="element__number-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
