import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  inputs: {
    flex: 0.3,
    paddingHorizontal: "5%",
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: "center",
  },
  haveAnAccount: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 18,
    color: colors.brandGreen,
    paddingVertical: "6%",
  },
});

export default styles;
