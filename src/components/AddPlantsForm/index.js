import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { styles } from "./styles";

import logoImg from "../../assets/fotoPlantinha.png";

export const AddPlantsForm = ({visible=true, setVisible}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
    <View style={styles.modalView}>
      <StatusBar 
          barStyle="light-content"
          backgroundColor={visible ? 'rgba(0,0,0,0.4)': 'blue'}
          transparent
      />

      <View style={styles.container}>
        <Image source={logoImg} style={styles.fotoPlantinha} />
        <View style={styles.inputContainer}>
            <Text style={[styles.text, { marginTop: 0}]}>Nome da planta:</Text>
            <TextInput style={styles.input} placeholder="Ex: Margarida" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.text, { marginTop: 0}]}>
              Frequência:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Frequência em horas"
              keyboardType="numeric"
            />
          </View>

        <View style={styles.buttonsContainer}> 
          <Pressable
            style={[styles.button, styles.buttonClose, {backgroundColor: 'red'}]}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.textStyle}>Adicionar</Text>
          </Pressable>
         </View> 
      </View>
    </View>
  </Modal>
  )
};