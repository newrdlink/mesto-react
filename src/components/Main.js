import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "../components/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  const dislikeCard = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    console.log("клик дислайк");
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.dislikeCard(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    }, []);
  };

  const likeCard = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    console.log("клик лайк");
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeCard(card._id, /*!isLiked*/).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    }, []);
  }

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
