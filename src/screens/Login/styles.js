import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  inputs: {
    flex: 0.25,
    paddingHorizontal: "5%",
  },
  buttonContainer: {
    flex: 0.25,
    alignItems: "center",
  },
  dontHaveAnAccount: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    color: colors.brandGreen,
    paddingVertical: "6%",
  },
  forgotPassword: {
    textAlign: "right",
    verticalAlign: "middle",
    fontSize: 10,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    color: colors.brandGreen,
  },
});

export default styles;
