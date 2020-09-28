import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "../components/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  const dislikeCard = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.dislikeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }, []);
  };

  const likeCard = (card) => {
    api.likeCard(card._id).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    }, []);
  };

  useEffect(() => {
    api
      .getAppStartInfo()
      .then((data) => {
        const [userData, cardsBackend] = data;
        setCards(cardsBackend);
      })
      .catch((err) => console.error(err));
  }, []);
  //
  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__image"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></button>
        <h1 className="profile__title">{currentUser.name}</h1>
        <p className="profile__subtitle">{currentUser.about}</p>
        <button
          type="button"
          className="profile__edit"
          onClick={onEditProfile}
        ></button>
        <button
          type="button"
          className="profile__button"
          onClick={onAddPlace}
        ></button>
      </section>
      <div className="places">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleCardClick={handleCardClick}
              onCardLike={likeCard}
              onCardDislike={dislikeCard}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
