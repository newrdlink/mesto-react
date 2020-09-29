import React from "react";

export default function EditProfilePopup({ isOpen, onClose }) {
  console.log(isOpen);
  return (
    <section
      className={`popup popup_function_edit ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close popup__button-close_place_edit-popup"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Редактирование профиля</h2>
        <form name="profile" className="popup__popup" noValidate>
          <fieldset className="popup__content">
            <label className="popup__item-control">
              <input
                name="name"
                type="text"
                className="popup__item popup__item_type_name"
                //value=""
                //autoComplete="off"
                //placeholder={currentUser.name}
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__item-error" id="name-error"></span>
            </label>
            <label className="popup__item-control">
              <input
                name="about"
                type="text"
                className="popup__item popup__item_type_about"
                //value=""
                //autoСomplete="off"
                placeholder="Опять двойка"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__item-error" id="about-error"></span>
            </label>
            <button
              type="submit"
              className="popup__button popup__button_disabled"
            >
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
