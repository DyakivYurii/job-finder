import React from 'react';

import './SignInForm.css';

const SignInForm = () => {
  return (
    <form className="sign-in__form">
      <input type="email" placeholder="E-mail" className="sign-in__input" />
      <input
        type="password"
        placeholder="Password"
        className="sign-in__input"
      />
      <button type="submit" className="sign-in__button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
