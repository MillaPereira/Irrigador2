import { StatusBar } from "react-native";
import React from "react";
import { Background } from "./src/components/Background";

import Routes from "./src/routes";

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
