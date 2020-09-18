import React from "react";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__image" onClick={onEditAvatar}></button>
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <p className="profile__subtitle">Исследователь океана</p>
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
