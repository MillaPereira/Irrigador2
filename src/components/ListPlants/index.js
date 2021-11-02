import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Card } from "../Card";

export const ListPlants = () => {
  const plants = [
    {
      id: 1,
      name: "ORQUIDEA",
    },
    {
      id: 2,
      name: "ROSA",
    },
    {
      id: 3,
      name: "MARGARIDA",
    },
    {
      id: 4,
      name: "CRAVO",
    },
    {
      id: 5,
      name: "GIRASSOL",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(plant) => plant.id}
        renderItem={({ item }) => <Card plantName={item.name}/>}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
};
