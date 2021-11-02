import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
  },
  button: {
    backgroundColor: theme.colors.mediumGreen,
    borderRadius: 50,
  },
});
