class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handlePromiseRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  patchUserProfile({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  patchUserAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  deleteCard({ _id }) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }

  changeLikeCardStatus({ _id }, method) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
      method: method,
      headers: this._headers,
    })
    .then(res => {
      return this._handlePromiseRes(res);
    });
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: '9dad3ee9-138f-48bd-8014-b648376a609a',
    'Content-Type': 'application/json'
  }
});
