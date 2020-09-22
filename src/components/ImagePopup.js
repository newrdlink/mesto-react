import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div
      className={`popup popup_function_open-element ${
        Object.keys(card).length > 0 ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__image-content">
        <button
          type="button"
          className="popup__button-close popup__button-close_place_open-element"
          onClick={onClose}
        ></button>
        <img
          src={card.link}
          alt={`Фотография ` + card.name}
          className="popup__image"
        />
        <figcaption className="popup__image-caption">
          {`Фотография ` + card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
