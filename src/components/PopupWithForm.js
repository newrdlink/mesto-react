import React from "react";

function PopupWithForm({ children, name, title, buttonName, isOpen, onClose }) {
  return (
    <section className={`popup popup_function_${name} ${isOpen}`}>
      <div
        className="popup__container"        
      >
        <button
          type="button"
          className="popup__button-close popup__button-close_place_edit-popup"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form name="profile" className="popup__popup" noValidate>
          <fieldset className="popup__content">
            {children}
            <button
              type="submit"
              className="popup__button popup__button_disabled"
            >
              {buttonName}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
