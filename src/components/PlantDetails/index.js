import React, { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from "react-native";

import {
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { styles } from "./styles";

import regadorImage from '../../assets/regador.png';

export const PlantDetails = ({ visible, setShowDetails, name="Rosa"}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <StatusBar 
            barStyle="light-content"
            backgroundColor={visible ? 'rgba(0,0,0,0.4)': 'blue'}
            transparent
        />

        <View style={styles.container}>
          <Text>{name}</Text>

          <View style={styles.middleBox}>
            <Image source={regadorImage} style={styles.image}/>

            <View style={styles.greenBox}>
              <Text style={styles.text}>
                Esta planta deve ser regada todo dia! Não se esqueça, por favor, pois não é só você quem
                sente sede, ok?
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
