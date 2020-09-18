import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  // хук состояния userData
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  // хук эффект при монтировании компонента
  // React.useEffect(() => {
  //   api.getUserData().then((res) => {
  //     setUserName(res);
  //   });
  // }, []);
  React.useEffect(() => {
    api.getAppStartInfo().then((res) => {
      const [userData, cardsBackend] = res;
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  });
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
        <ul className="elements"></ul>
      </div>
    </main>
  );
}

export default Main;
