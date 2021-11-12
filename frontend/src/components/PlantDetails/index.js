import React from "react";
import { StatusBar, TouchableOpacity, Pressable } from "react-native";
import { View, Image, Text, Modal } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import regadorImage from "../../assets/regador.png";

import api from '../../services/api'

export const PlantDetails = ({ visible, setShowDetails, name, id_node, description }) => {
  const closePlantDetails = () => {
    setShowDetails(false);
  };

  const deletePlant = async (id_node) => {
    try {
      await api.delete(`delete/plant/${id_node}`)
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(0,0,0,0.4)"
          transparent
        />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => closePlantDetails()}
          >
            <AntDesign name="closecircleo" size={30} color="#004b23" />
          </TouchableOpacity>

          <Text style={styles.namePlant}>{name}</Text>
          <View style={styles.middleBox}>
            <Image source={regadorImage} style={styles.regadorIcon} />

            <View style={styles.greenBox}>
              <Text style={styles.text}>
                {description}
              </Text>
            </View>
          </View>
          <Pressable
              style={styles.deleteButton}
              onPress={() => [setShowDetails(false), deletePlant(id_node)]}
            >
              <Text style={styles.textStyle}>Deletar</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
  );
};
