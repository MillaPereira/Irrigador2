import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Card } from "../Card";

export const ListPlants = ({ plants }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(plant) => plant.id}
        renderItem={({ item }) => <Card plantName={item.name} />}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
};
