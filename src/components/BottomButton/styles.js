import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 50,
    position: 'absolute',
    right: 20, 
    bottom: 20
  },
});
