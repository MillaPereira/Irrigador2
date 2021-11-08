import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    width: 300,
    height: 250,
    backgroundColor: theme.colors.lightGreen, //theme.colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 15,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  text: {
    fontSize: 15,
  },
  middleBox: {
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  regadorIcon: {
    height: 40,
    width: 40,
    alignSelf: "center",
    marginRight: 10,
  },
  greenBox: {
    backgroundColor: theme.colors.mediumGreen,
    borderRadius: 8,
    padding: 8,
  },
  namePlant: {
    fontSize: 30,
    marginBottom: "10%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: '#ba0c0c',
    borderRadius: 8,
    padding: 8,
    marginTop: "10%",
    width: "30%",
  },

});
