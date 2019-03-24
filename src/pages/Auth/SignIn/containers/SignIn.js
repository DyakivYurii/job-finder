import React from 'react';

import SignInForm from '../components/SignInForm';

import './SignIn.css';

const SignIn = () => {
  return (
    <section className="sign-in container">
      <div className="row">
        <div className="col">
          <h2 className="sign-in__title">Sign In</h2>
          <SignInForm className="col" />
          <p className="sign-in__sign-up-text">
            Doesn't have an account?{' '}
            <span className="sign-in__sign-up-text--link">Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
