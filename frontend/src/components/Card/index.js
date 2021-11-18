import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import plantIcon from "../../assets/fotoPlantinha.jpg";
import { PlantDetails } from "../PlantDetails";

export const Card = ({ name, id_node, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={plantIcon} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.line} />
      </View>

      <PlantDetails
        visible={showDetails}
        setShowDetails={setShowDetails}
        style={styles.plant}
        name={name}
        id_node={id_node}
        description={description}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDetails(true)}
      >
        <Fontisto name="more-v-a" size={24} color={theme.colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};
