import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { AddPlantsForm } from "../AddPlantsForm";

export const BottomButton = () => {
  const [openAddPlantsForm, setOpenAddPlantsForm] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpenAddPlantsForm(true)}
      >
        <Feather name="plus-circle" size={70} color="#fff" />
        {openAddPlantsForm && (
          <AddPlantsForm setVisible={setOpenAddPlantsForm} />
        )}
      </TouchableOpacity>
    </View>
  );
};
