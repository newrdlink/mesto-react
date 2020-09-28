import React from "react";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
    this._groupId = "cohort-14";
  }

  getAppStartInfo() {
    return Promise.all([this.getUserData(), this.getInitialCards()]);
  }

  getInitialCards() {
    return fetch(`${this.address}/${this._groupId}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  getUserData() {
    return fetch(`${this.address}/${this._groupId}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  patchUserData({ data }) {
    return fetch(`${this.address}/${this._groupId}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  addNewCard({ data }) {
    return fetch(`${this.address}/${this._groupId}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data["name-element"],
        link: data["link-element"],
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  changeAvatar(data) {
    return fetch(`${this.address}/${this._groupId}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  removeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  likeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }

  dislikeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }
}

//создаем экземпляр API
const api = new Api({
  address: "https://mesto.nomoreparties.co/v1",
  headers: {
    authorization: "27ead031-f9f7-43be-99b7-3296b8a48ff4",
    "Content-Type": "application/json",
  },
});
export default api;
