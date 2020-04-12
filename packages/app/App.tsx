import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { HomePage } from './HomePage';
import { Games } from './games/Games';
import { PseudoSociety } from './games/pseudoSociety/PseudoSociety';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/pseudo-society" component={PseudoSociety} />
    </NativeRouter>
  );
}
