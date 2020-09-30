import React from "react";
import { useRef } from "react";

export default function AddPlacePopup({ onClose, isOpen, addNewPlace }) {
  const inputNamePlace = useRef("");
  const inputUrlPlace = useRef("");

  const onSubmit = (evt) => {   
    evt.preventDefault();
    const data = {
      name: inputNamePlace.current.value,
      link: inputUrlPlace.current.value,
    };
    addNewPlace(data);
  };

  return (
    <section
      className={`popup popup_function_add-element ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={(evt) => (evt.target === evt.currentTarget ? onClose() : false)}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close popup__button-close_place_edit-popup"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Новое место</h2>
        <form
          name="profile"
          className="popup__popup"
          noValidate
          onSubmit={onSubmit}
        >
          <fieldset className="popup__content">
            <label>
              <input
                name="name-element"
                type="text"
                className="popup__item popup__item_type_add-name-element"
                //value=""
                placeholder="Название"
                minLength="1"
                maxLength="30"
                required
                ref={inputNamePlace}
              />
              <span
                className="popup__item-error"
                id="name-element-error"
              ></span>
            </label>
            <label>
              <input
                name="link-element"
                type="url"
                className="popup__item popup__item_type_add-link-element"
                //value=""
                placeholder="Ссылка на картинку"
                required
                ref={inputUrlPlace}
              />
              <span
                className="popup__item-error"
                id="link-element-error"
              ></span>
            </label>
            <button
              type="submit"
              className="popup__button popup__button_disabled"
            >
              Добавить новое место
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
