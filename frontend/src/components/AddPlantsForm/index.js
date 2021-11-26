import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Image, Text, TextInput, Modal, Pressable } from "react-native";
import { styles } from "./styles";
import {w3cwebsocket as Websocket} from 'websocket'
import api from "../../services/api";

import logoImg from "../../assets/fotoPlantinha.jpg";

const client = new Websocket("ws://192.168.0.10:3333");

export const AddPlantsForm = ({ visible = true, setVisible }) => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState(0);
  const [description, setDescription] = useState("");

  client.onopen = () => {
    console.log("Client react native connected!");
  }

  const sendMessageToNode = (id, frequency) => {
    client.send(`${id}-${frequency}`);
  }

  const addPlant = async (name, frequency, description) => {
    if (name === "" || frequency === 0 || description === "") {
      alert("Preencha todos os detalhes, por favor!");
      return;
    }

    try {
      const response = await api.post(
        "new/plant",
        {
          name,
          frequency,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      sendMessageToNode(response.data.newPlant.id_node, frequency);
      
    } catch (err) {
      console.log(err.message);
    }
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
          <View style={styles.inputContainer}>
            <Text style={[styles.text, { marginTop: 0 }]}>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Planta aquática, natural do caribe."
              multiline={true}
              numberOfLines={4}
              onChangeText={(description) => setDescription(description)}
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
              onPress={() => [
                addPlant(name, frequency, description),
                setVisible(false),
              ]}
            >
              <Text style={styles.textStyle}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
