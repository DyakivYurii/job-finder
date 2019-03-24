import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn/containers/SignIn';

import './App.css';

const App = () => {
  return (
    <div className="">
      <SignIn />
    </div>
  );
};

export default App;
