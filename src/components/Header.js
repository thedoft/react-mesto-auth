import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип сервиса" />
      <div className="header__info-container">
        <p className="header__user-login">{`${props.isLoggedIn ? props.userLogin : ''}`}</p>
        <NavLink className={`header__navlink ${props.isLoggedIn ? 'header__navlink_logged-in' : ''}`}
          to={props.navlinkPath}
          onClick={props.onSignOut}
        >{props.navlinkText}</NavLink>
      </div>
    </header>
  )
}

export default Header;
