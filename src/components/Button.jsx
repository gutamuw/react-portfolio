import React from "react";
import '../styles/buttons.css';

function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;