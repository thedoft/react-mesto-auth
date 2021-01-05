import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from './AddCardPopup';
import ImagePopup from './ImagePopup';
import ConfirmPopup from './ConfirmPopup';

import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(<></>);
  const [cards, setCards] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.getUserData()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleCardLikeClick(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.changeLikeCardStatus({ _id: card._id}, (isLiked ? 'DELETE' : 'PUT'))
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleCardDeleteClick(card) {
    setIsConfirmPopupOpen(true);
    setSelectedCard(card);
  }

  function handleCardDelete(card) {
    setIsLoading(true);

    api.deleteCard({ _id: card._id })
    .then(() => {
      const newCards = cards.filter(c => c._id !== card._id);
      setCards(newCards);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleLayoutClick(popup) {
    popup.addEventListener('mousedown', evt => {
      evt.target === evt.currentTarget && closeAllPopups();
    });
  }

  function handleEscapeClose(evt) {
    evt.key === 'Escape' && closeAllPopups();
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    setIsLoading(true);

    api.patchUserProfile({ name, about })
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    setIsLoading(true);

    api.patchUserAvatar({ avatar })
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddCard({ name, link }) {
    setIsLoading(true);

    api.addNewCard({ name, link })
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Header />

      <main className="main">
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <ProtectedRoute
            path='/'
            isLoggedIn={isLoggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLikeClick}
            onCardDelete={handleCardDeleteClick}
          />
        </Switch>
      </main>

      <Footer />

      <ImagePopup isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
        onLayout={handleLayoutClick}
        onEscape={handleEscapeClose}
      />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        onLayout={handleLayoutClick}
        onEscape={handleEscapeClose}
        isLoading={isLoading}
      />

      <EditProfilePopup isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        onLayout={handleLayoutClick}
        onEscape={handleEscapeClose}
        isLoading={isLoading}
      />

      <AddCardPopup isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
        onAddCard={handleAddCard}
        onLayout={handleLayoutClick}
        onEscape={handleEscapeClose}
        isLoading={isLoading}
      />

      <ConfirmPopup card={selectedCard}
        onConfirm={handleCardDelete}
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        onLayout={handleLayoutClick}
        onEscape={handleEscapeClose}
        isLoading={isLoading}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
