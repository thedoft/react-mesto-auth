import React, { useEffect, useRef } from 'react';

export default function InfoTooltip(props) {
  const popup = useRef();

  useEffect(() => {
    props.isOpen && document.addEventListener('keyup', props.onEscape);

    return () => {
      document.removeEventListener('keyup', props.onEscape);
    };
  }, [props]);

  function handleLayoutClick() {
    props.onLayout(popup.current);
  }

  return (
    <div ref={popup} onClick={handleLayoutClick} className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form name={props.name} className="popup__form">
        <img src={props.image} alt="Результат запроса" className="popup__tooltip-image" />
        <h2 className="popup__title popup__title_tooltip">{props.title}</h2>
        <button onClick={props.onClose} type="reset" className="popup__close-button" />
      </form>
    </div>
  )
}
