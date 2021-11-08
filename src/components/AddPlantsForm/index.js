import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Image, Text, TextInput, Modal, Pressable } from "react-native";
import { styles } from "./styles";

// this should be removed soon
import { plants } from "../../DummyData/plants";

import logoImg from "../../assets/fotoPlantinha.png";

export const AddPlantsForm = ({ visible = true, setVisible }) => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState(0);

  // this just works for dummy data, it should be changed later!
  const addPlant = (name, frequency) => {
    const id = Math.random();
    const newPlant = { id, name, frequency };

    plants.push(newPlant);
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
          <Image source={logoImg} style={styles.fotoPlantinha} />
          <View style={styles.inputContainer}>
            <Text style={[styles.text, { marginTop: 0 }]}>Nome da planta:</Text>
            <TextInput
              onChangeText={(name) => setName(name)}
              style={styles.input}
              placeholder="Ex: Margarida"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.text, { marginTop: 0 }]}>Frequência:</Text>
            <TextInput
              style={styles.input}
              placeholder="Frequência em horas"
              keyboardType="numeric"
              onChangeText={(frequency) => setFrequency(frequency)}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={[
                styles.button,
                styles.buttonClose,
                { backgroundColor: "red" },
              ]}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(false)}
              onPress={() => [addPlant(name, frequency), setVisible(false)]}
            >
              <Text style={styles.textStyle}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
