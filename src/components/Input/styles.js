import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    lineHeight: 17,
    color: colors.gray1,
    paddingBottom: "2%",
  },
  input: {
    height: 46,
    width: "100%",
    backgroundColor: colors.gray6,
    borderRadius: 10,
    paddingLeft: "2%",
    color: colors.gray1,
    marginBottom: "3%",
  },
});

export default styles;
