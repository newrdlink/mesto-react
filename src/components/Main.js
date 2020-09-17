import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__image"></button>
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <p className="profile__subtitle">Исследователь океана</p>
        <button type="button" className="profile__edit"></button>
        <button type="button" className="profile__button"></button>
      </section>
      <div className="places">
        <ul className="elements"></ul>
      </div>
    </main>
  );
}

export default Main;
