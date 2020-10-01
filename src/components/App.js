import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PopupWithForm from "../components/PopupWithForm";
import EditProfilePopup from "../components/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup";
import AddPlacePopup from "../components/AddPlacePopup";
import ImagePopup from "../components/ImagePopup";
import Main from "../components/Main";
import Footer from "../components/Footer";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";

function App() {
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
  }, []);
  // лайки и дизлайки
  const dislikeCard = (card) => {
    api.dislikeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  };

  const likeCard = (card) => {
    api.likeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  };
  //
  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  };
  // переменная состояния для данных пользователя
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
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
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
        setCurrentUser(userAvatar);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };
  //
  const handleAddNewPlace = (data) => {
    api
      .addNewCard(data)
      .then((newCard) => {
        cards.unshift(newCard);
        setCards(cards);
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
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          addNewPlace={handleAddNewPlace}
        />
        <PopupWithForm name="question" title="Вы уверены?" buttonName="Да" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
