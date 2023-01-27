import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
    shadowColor: colors.black70,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 7,
  },
  title: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 18,
    color: colors.primary,
  },
});

export default styles;
