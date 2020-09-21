import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
  // хук состояния userData и Cards
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  // хук эффект при монтировании компонента
  useEffect(() => {
    api
      .getAppStartInfo()
      .then((data) => {
        const [userData, cardsBackend] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></button>
        <h1 className="profile__title">{userName}</h1>
        <p className="profile__subtitle">{userDescription}</p>
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
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
