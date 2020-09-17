import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../index.css";

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <section className="popup popup_function_edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close popup__button-close_place_edit-popup"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="profile" action="url" className="popup__popup" noValidate>
            <fieldset className="popup__content">
              <label className="popup__item-control">
                <input
                  name="name"
                  type="text"
                  className="popup__item popup__item_type_name"
                  //value=""
                  //autoComplete="off"
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
      <section className="popup popup_function_edit-avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close popup__button-close_place_edit-avatar"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="profile" action="url" className="popup__popup" noValidate>
            <fieldset className="popup__content">
              <label className="popup__item-control">
                <input
                  name="avatar"
                  type="URL"
                  className="popup__item popup__item_type_name"
                  //value=""
                  required
                />
                <span className="popup__item-error" id="avatar-error"></span>
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
      <section className="popup popup_function_add-element">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close popup__button-close_place_add-element"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            name="add-element"
            action="url"
            className="popup__popup"
            noValidate
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
                />
                <span
                  className="popup__item-error"
                  id="link-element-error"
                ></span>
              </label>
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <section className="popup popup_function_question">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close popup__button-close_place_question"
          ></button>
          <h2 className="popup__title">Вы уверены ?</h2>
          <form
            name="add-element"
            action="url"
            className="popup__popup"
            noValidate
          >
            <fieldset className="popup__content">
              <button type="submit" className="popup__button">
                Да
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <div className="popup popup_function_open-element">
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
      <template id="element" className="element-template">
        <li className="element">
          <img
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
            alt="Фотография"
            className="element__image"
          />
          <button type="button" className="element__basket"></button>
          <div className="element__content">
            <h3 className="element__title"></h3>
            <div className="element__likes">
              <button type="button" className="element__heart"></button>
              <span className="element__number-likes"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
