import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { HomePage } from './HomePage';
import { Games } from './games/Games';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/pseudo-society" component={Games} />
    </NativeRouter>
  );
}
