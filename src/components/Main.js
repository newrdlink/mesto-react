import React from "react";

function Main() {
  // открытие попапа для редактирования аватара
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_function_edit-avatar")
      .classList.add("popup_opened");
  }
  // открытия попапа для редактирования профиля
  function handleEditProfileClick() {
    document
      .querySelector(".popup_function_edit")
      .classList.add("popup_opened");
  }
  // открытие попапа для добавление новой карточки
  function handleAddPlaceClick() {
    document
      .querySelector(".popup_function_add-element")
      .classList.add("popup_opened");
  }

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__image"
          onClick={handleEditAvatarClick}
        ></button>
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <p className="profile__subtitle">Исследователь океана</p>
        <button
          type="button"
          className="profile__edit"
          onClick={handleEditProfileClick}
        ></button>
        <button
          type="button"
          className="profile__button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <div className="places">
        <ul className="elements"></ul>
      </div>
    </main>
  );
}

export default Main;
