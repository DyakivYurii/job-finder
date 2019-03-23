import React from 'react';

import './SignUpForm.css';

const SignUpForm = () => {
  return (
    <form className="sign-up__form">
      <input
        type="text"
        name="user-name"
        placeholder="User name"
        className="sign-up__input"
      />
      <button type="submit" className="sign-up__button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
