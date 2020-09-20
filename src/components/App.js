import React, { useState } from "react";
import Header from "../components/Header";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../index.css";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [card, setCard] = useState([null]);
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
    setSelectedCard(false);
  };
  //
  const onCardClick = (data) => {
    setSelectedCard(true);
    setCard(data);
    console.log(data.name);
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
          handleCardClick={onCardClick}
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
      <ImagePopup card={card} opened={selectedCard} />
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
    </div>
  );
}

export default App;
