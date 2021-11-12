import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Card } from "../Card";
import api from "../../services/api";

export const ListPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      try {
        const response = await api.get('plants');
        setPlants(response.data);
      } catch(err) {
        console.log(err.message);
      }
    }

    getPlants();
  }, [plants]);

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(plant) => plant.id_node}
        renderItem={({ item }) => <Card name={item.name} id_node={item.id_node} description={item.description}/>}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
};
