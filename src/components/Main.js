import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  // хук состояния userName
  const [userName, setUserName] = useState([]);
  // хук эффект при монтировании компонента
  React.useEffect(() => {
    api.getUserData().then((res) => {
      setUserName(res);
    });
  }, []);
  //
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__image" onClick={onEditAvatar}></button>
        <h1 className="profile__title">{userName.name}</h1>
        <p className="profile__subtitle">{userName.about}</p>
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
