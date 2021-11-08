import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { AddPlantsForm } from "../AddPlantsForm";

export const BottomButton = () => {
  const [openAddPlantsForm, setOpenAddPlantsForm] = useState(false);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setOpenAddPlantsForm(true)}
    >
      <Feather name="plus-circle" size={70} color="#fff" />
      {openAddPlantsForm && (
        <AddPlantsForm setVisible={setOpenAddPlantsForm} />
      )}
    </TouchableOpacity>
  );
};
