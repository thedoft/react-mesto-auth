import React from 'react';

export default function Form(props) {
  return (
    <form name={props.name} className="form" onSubmit={props.onSubmit}>
      <h2 className="form__title">{props.title}</h2>
        {props.children}
      <button type="submit" className="form__submit-button">{props.isLoading ? props.buttonLoadingText : props.buttonText}</button>
    </form>
  )
}
