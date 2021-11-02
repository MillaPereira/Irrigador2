import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    width: 300,
    height: 500,
    backgroundColor: "#DADADA",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  middleBox: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  image: {
    height: 40,
    width: 40, 
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  }, 
  greenBox: {
    backgroundColor: "#86DB78",
    borderRadius: 8,
    padding: 8,
  }
});