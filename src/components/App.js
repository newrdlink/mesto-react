import React from "react";
import Header from "../components/Header";
import PopupWithForm from "../components/PopupWithForm";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../index.css";

function App() {
  // хук состояния попапа c аватаром
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  // хук состояния попапа редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  // хук состояния попапа с формой добавления карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // открытие попапа для редактирования аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  // открытия попапа для редактирования профиля
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  // открытие попапа для добавление новой карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  // обработчик закрытия попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };
  //
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        ></Main>
        <Footer />
      </div>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonName="Изменить"
        isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-element"
        title="Новое место"
        buttonName="Добавить место"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
      <PopupWithForm name="question" title="Вы уверены?" buttonName="Да" />
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
