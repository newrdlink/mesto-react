import React from "react";
import { useRef } from "react";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateUserAvatar,
}) {
  const inputValue = useRef(null); //
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      avatar: inputValue.current.value,
    };
    onUpdateUserAvatar(data);
    evt.target.reset();
  };
  //
  return (
    <section
      className={`popup popup_function_edit-avatar ${
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
        <h2 className="popup__title">Редактирование аватара</h2>
        <form
          name="profile"
          className="popup__popup"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__content">
            <label className="popup__item-control">
              <input
                name="avatar"
                type="URL"
                className="popup__item popup__item_type_name"
                placeholder="Ссылка"
                required
                ref={inputValue}
              />
              <span className="popup__item-error" id="avatar-error"></span>
            </label>
            <button type="submit" className="popup__button">
              Изменить аватар
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
