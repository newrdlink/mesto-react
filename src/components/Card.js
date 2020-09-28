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
  const cardDeleteButtonClassName = `element__basket ${
    !isOwn && "element__basket_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardIsLikedClassName = `element__heart ${
    isLiked ? "element__heart_active" : ""
  }`;
  return (
    <li className="element">
      <img
        src={card.link}
        alt="Фотография"
        className="element__image"
        onClick={() => handleCardClick(card)}
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={() => {
          handleCardDelete(card);
        }}
      ></button>
      <div className="element__content">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__likes">
          <button
            type="button"
            className={cardIsLikedClassName}
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
