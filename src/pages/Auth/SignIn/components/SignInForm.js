import React from 'react';

import './SignInForm.css';

const SignInForm = () => {
  return (
    <form className="sign-in__form">
      <label>
        <p>Email:</p>
        <input type="email" placeholder="E-mail" className="sign-in__input" />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="Password"
          className="sign-in__input"
        />
      </label>
      <button type="submit" className="sign-in__button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
