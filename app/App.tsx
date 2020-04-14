import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { HomePage } from './HomePage';
import { Games } from './games/Games';
import { PseudoSociety } from './games/pseudoSociety/PseudoSociety';
import { Login } from './auth-screens/Login';
import { SignUp } from './auth-screens/SignUp';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/pseudo-society" component={PseudoSociety} />
      <Route exact path="/signup" component={SignUp} />
    </NativeRouter>
  );
}
