import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";
import Main from "../components/Main";
import Footer from "../components/Footer";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";

function App() {
  // переменная состояния currentUser для данных пользователя
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserData().then((res) => {
      setCurrentUser(res);
    });
  }, []);
  //console.log(currentUser)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState({});
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
    setSelectedCard({});
  };
  //
  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            handleCardClick={handleCardClick}
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
              placeholder="Рашетников"
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
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonName="Изменить"
          isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
        >
          <label className="popup__item-control">
            <input
              name="avatar"
              type="URL"
              className="popup__item popup__item_type_name"
              //value=""
              placeholder="Ссылка"
              required
            />
            <span className="popup__item-error" id="avatar-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-element"
          title="Новое место"
          buttonName="Добавить место"
          isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
        >
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
            <span className="popup__item-error" id="name-element-error"></span>
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
            <span className="popup__item-error" id="link-element-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="question" title="Вы уверены?" buttonName="Да" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
