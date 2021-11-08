import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ListPlants } from "../../components/ListPlants";
import { BottomButton } from "../../components/BottomButton";
import { plants } from "../../DummyData/plants";

export const Home = ({ route }) => {
  const { nameUser } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.text}>Bem vindo(a), </Text>
        <Text style={styles.userName}>{nameUser}</Text>
      </View>

      <View style={styles.list}>
        <ListPlants plants={plants} />
      </View>
      <BottomButton />
    </View>
  );
};
