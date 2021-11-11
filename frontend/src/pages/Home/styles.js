import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    width: "100%",
    height: 50,
    marginTop: 50,
    alignItems: "center",
    marginLeft: 30,
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    color: "#fff",
  },
  userName: {
    fontSize: 30,
    color: "#fff",
  },
  list: {
    flex: 1,
    marginTop: 40,
  },
  footer: {
    width: "100%",
    backgroundColor: "red",
    height: 80,
  },
});
