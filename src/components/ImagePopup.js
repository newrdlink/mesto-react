import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup_function_open-element`}>
      <figure className="popup__image-content">
        <button
          type="button"
          className="popup__button-close popup__button-close_place_open-element"
        ></button>
        <img
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
          alt="Фотография"
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
