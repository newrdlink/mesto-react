import React from "react";

function ImagePopup({ onClose, card, opened }) {
  console.log(card);
  return (
    <div
      className={`popup popup_function_open-element ${
        opened ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__image-content">
        <button
          type="button"
          className="popup__button-close popup__button-close_place_open-element"
        ></button>
        <img
          src={card.link}
          alt={`Фотография ` + card.name}
          className="popup__image"
        />
        <figcaption className="popup__image-caption">
          Это подпись картинки
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
