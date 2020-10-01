import React from "react";
import handleResponse from "./utils";

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
    }).then(handleResponse);
  }

  getUserData() {
    return fetch(`${this.address}/${this._groupId}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(handleResponse);
  }

  patchUserData(data) {
    return fetch(`${this.address}/${this._groupId}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleResponse);
  }

  addNewCard(data) {
    return fetch(`${this.address}/${this._groupId}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(handleResponse);
  }

  changeAvatar(data) {
    return fetch(`${this.address}/${this._groupId}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(handleResponse);
  }

  removeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(handleResponse);
  }

  likeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this.headers,
    }).then(handleResponse);
  }

  dislikeCard(cardID) {
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(handleResponse);
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
