import React from "react";
import { useRef } from "react";
import classNames from "classnames/bind";

function ImagePopup({ onClose, card }) {
  const imageContainer = useRef(null);
  return (
    <div
      className={classNames("popup", "popup_function_open-element", {
        popup_opened: Object.keys(card).length,
      })}
      onClick={(evt) => (evt.target === evt.currentTarget ? onClose() : false)}
    >
      <figure className="popup__image-content" ref={imageContainer}>
        <button
          type="button"
          className="popup__button-close popup__button-close_place_open-element"
          onClick={onClose}
        ></button>
        {card.link && (
          <img
            src={card.link}
            alt={`Фотография ` + card.name}
            className="popup__image"
            onLoad={(e) => {
              imageContainer.current.style.width = `${e.target.offsetWidth}px`;
              imageContainer.current.style.height = `${e.target.offsetHeight}px`;
            }}
          />
        )}
        <figcaption className="popup__image-caption">
          {`Фотография ` + card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
