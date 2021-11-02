import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export default function BemVindo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const navigateToPlants = () => {
    if (name === "") {
      alert("Nos forneça seu nome, por favor!");
      return;
    }
    navigation.navigate("Home", { nameUser: name });
  };

  const handleInput = (name) => {
    setName(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>
          Bem Vindo(a)!{"\n"}
          Como podemos te chamar?
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={handleInput}
      />
      <View style={styles.line} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToPlants()}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
