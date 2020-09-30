import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PopupWithForm from "../components/PopupWithForm";
import EditProfilePopup from "../components/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup";
import ImagePopup from "../components/ImagePopup";
import Main from "../components/Main";
import Footer from "../components/Footer";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";

function App() {
  // переменная состояния userAvatar
  const [userAvatar, setUserAvatar] = useState({});
  // создание стейта для хранения карточек
  const [cards, setCards] = useState([]);
  // эффект для запроса данных с сервера
  useEffect(() => {
    api
      .getAppStartInfo()
      .then((data) => {
        const [userDataBackend, cardsBackend] = data;
        setCards(cardsBackend);
        setCurrentUser(userDataBackend);
      })
      .catch((err) => console.error(err));
  }, [userAvatar]);
  // лайки и дизлайки
  const dislikeCard = (card) => {
    api.dislikeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }, []);
  };

  const likeCard = (card) => {
    api.likeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }, []);
  };
  //
  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      console.log(card._id);
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    }, []);
  };
  // переменная состояния currentUser для данных пользователя
  const [currentUser, setCurrentUser] = useState({});
  //
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  //
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
  //
  const handleUpdateUser = (data) => {
    api
      .patchUserData(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };
  //
  const handleUpdateUserAvatar = (data) => {
    api
      .changeAvatar(data)
      .then((userAvatar) => {
        setUserAvatar(userAvatar);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };
  //
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
            cards={cards}
            setCards={setCards}
            likeCard={likeCard}
            dislikeCard={dislikeCard}
            handleCardDelete={handleCardDelete}
          ></Main>
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateUserAvatar={handleUpdateUserAvatar}
        />
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
