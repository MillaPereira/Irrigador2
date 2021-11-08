import React from "react";
import { StatusBar, TouchableOpacity, Pressable } from "react-native";

import { View, Image, Text, Modal } from "react-native";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import regadorImage from "../../assets/regador.png";

export const PlantDetails = ({ visible, setShowDetails, name = "Rosa" }) => {
  const closePlantDetails = () => {
    setShowDetails(false);
  };

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
                Esta planta deve ser regada todo dia! Não se esqueça, por favor,
                pois não é só você quem sente sede, ok?
              </Text>
            </View>
          </View>
          <Pressable
              style={styles.deleteButton}
              onPress={() => setShowDetails(false)}
            >
              <Text style={styles.textStyle}>Deletar</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
  );
};
