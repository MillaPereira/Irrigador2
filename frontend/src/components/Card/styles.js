import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 81,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: theme.colors.darkGreen,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 24,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 13,
    marginBottom: 4,
  },
  button: {
    height: 50,
    width: 20,
    marginRight: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
  },
  plant: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  }
});
