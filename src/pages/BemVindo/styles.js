import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.77,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    width: "80%",
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    color: "#000000",
  },
  button: {
    height: 60,
    width: "70%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 15,
    width: "50%",
    borderColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkGreen,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
  textoBotao: {
    color: theme.colors.darkGreen,
    fontSize: 18,
  },
});
