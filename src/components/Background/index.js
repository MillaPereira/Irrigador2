import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./styles";

export const Background = ({ children }) => {
  const backgroundImage = require("../../assets/fundo.png");
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};
