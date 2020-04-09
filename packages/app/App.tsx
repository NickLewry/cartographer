import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { HomePage } from './HomePage';
import { StrictlyAmigos } from './games/strictlyAmigos/StrictlyAmigos';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/strictly-amigos" component={StrictlyAmigos} />
    </NativeRouter>
  );
}
