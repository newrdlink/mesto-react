import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({
  card,
  handleCardClick,
  onCardLike,
  onCardDislike,
  handleCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  return (
    <li className="element">
      <img
        src={card.link}
        alt={"Фотография " + card.name}
        className="element__image"
        onClick={() => handleCardClick(card)}
      />
      <button
        type="button"
        className={`element__basket ${isOwn ? "" : "element__basket_hidden"}`}
        onClick={() => {
          handleCardDelete(card);
        }}
      ></button>
      <div className="element__content">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__likes">
          <button
            type="button"
            className={`element__heart ${
              isLiked ? "element__heart_active" : ""
            }`}
            onClick={
              isLiked ? () => onCardDislike(card) : () => onCardLike(card)
            }
          ></button>
          <span className="element__number-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
