import React, { useState, useEffect } from 'react';

import Form from './Form';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    props.setHeaderNavlinkData('/signup', 'Зарегистрироваться');

    return () => {
    props.setHeaderNavlinkData('/', '');
    }
  });

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  return (
    <div className="auth">
      <Form name="login" onSubmit={props.onSubmit} title="Вход" isLoading={props.isLoading} buttonLoadingText="Вход..." buttonText="Войти">
        <fieldset className="form__info">
          <input value={email || ''} onChange={handleEmailChange} name="email-input" type="email" className="form__input form__input_type_email" placeholder="Email" required maxLength="50" />
          <span className="form__input-error" id="email-input-error" />
          <input value={password || ''} onChange={handlePasswordChange} name="password-input" type="password" className="form__input form__input_type_password" placeholder="Пароль" required minLength="8" maxLength="100" />
          <span className="form__input-error" id="password-input-error" />
        </fieldset>
      </Form>
    </div>
  )
}
