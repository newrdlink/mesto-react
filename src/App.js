import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="page">
        <header class="header">
          <img
            alt="Логотип"
            class="header__logo"
            src="../images/logo-header.svg"
          />
        </header>
        <main class="main">
          <section class="profile">
            <button class="profile__image"></button>
            <h1 class="profile__title">Жак-Ив Кусто</h1>
            <p class="profile__subtitle">Исследователь океана</p>
            <button type="button" class="profile__edit"></button>
            <button type="button" class="profile__button"></button>
          </section>
          <div class="places">
            <ul class="elements"></ul>
          </div>
        </main>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
      </div>
      <section class="popup popup_function_edit">
        <div class="popup__container">
          <button
            type="button"
            class="popup__button-close popup__button-close_place_edit-popup"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form name="profile" action="url" class="popup__popup" novalidate>
            <fieldset class="popup__content">
              <label class="popup__item-control">
                <input
                  name="name"
                  type="text"
                  class="popup__item popup__item_type_name"
                  value=""
                  autocomplete="off"
                  minlength="2"
                  maxlength="40"
                  required
                />
                <span class="popup__item-error" id="name-error"></span>
              </label>
              <label class="popup__item-control">
                <input
                  name="about"
                  type="text"
                  class="popup__item popup__item_type_about"
                  value=""
                  autocomplete="off"
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span class="popup__item-error" id="about-error"></span>
              </label>
              <button
                type="submit"
                class="popup__button popup__button_disabled"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section class="popup popup_function_edit-avatar">
        <div class="popup__container">
          <button
            type="button"
            class="popup__button-close popup__button-close_place_edit-avatar"
          ></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form name="profile" action="url" class="popup__popup" novalidate>
            <fieldset class="popup__content">
              <label class="popup__item-control">
                <input
                  name="avatar"
                  type="URL"
                  class="popup__item popup__item_type_name"
                  value=""
                  required
                />
                <span class="popup__item-error" id="avatar-error"></span>
              </label>
              <button
                type="submit"
                class="popup__button popup__button_disabled"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section class="popup popup_function_add-element">
        <div class="popup__container">
          <button
            type="button"
            class="popup__button-close popup__button-close_place_add-element"
          ></button>
          <h2 class="popup__title">Новое место</h2>
          <form name="add-element" action="url" class="popup__popup" novalidate>
            <fieldset class="popup__content">
              <label>
                <input
                  name="name-element"
                  type="text"
                  class="popup__item popup__item_type_add-name-element"
                  value=""
                  placeholder="Название"
                  minlength="1"
                  maxlength="30"
                  required
                />
                <span class="popup__item-error" id="name-element-error"></span>
              </label>
              <label>
                <input
                  name="link-element"
                  type="url"
                  class="popup__item popup__item_type_add-link-element"
                  value=""
                  placeholder="Ссылка на картинку"
                  required
                />
                <span class="popup__item-error" id="link-element-error"></span>
              </label>
              <button type="submit" class="popup__button">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section class="popup popup_function_question">
        <div class="popup__container">
          <button
            type="button"
            class="popup__button-close popup__button-close_place_question"
          ></button>
          <h2 class="popup__title">Вы уверены ?</h2>
          <form name="add-element" action="url" class="popup__popup" novalidate>
            <fieldset class="popup__content">
              <button type="submit" class="popup__button">
                Да
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <div class="popup popup_function_open-element">
        <figure class="popup__image-content">
          <button
            type="button"
            class="popup__button-close popup__button-close_place_open-element"
          ></button>
          <img
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
            alt="Фотография"
            class="popup__image"
          />
          <figcaption class="popup__image-caption">
            Это подпись картинки
          </figcaption>
        </figure>
      </div>
      <template id="element" class="element-template">
        <li class="element">
          <img
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
            alt="Фотография"
            class="element__image"
          />
          <button type="button" class="element__basket"></button>
          <div class="element__content">
            <h3 class="element__title"></h3>
            <div class="element__likes">
              <button type="button" class="element__heart"></button>
              <span class="element__number-likes"></span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
