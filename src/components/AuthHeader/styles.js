import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  backIcon: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  iconAndTitleContainer: {
    flex: 0.4,
    flexDirection: "row",
  },
  titleContainer: {
    flex: 0.55,
    justifyContent: "flex-end",
  },
  title: {
    paddingBottom: "50%",
    paddingLeft: "10%",
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: 34,
    fontFamily: "Inter_700Bold",
    lineHeight: 41,
    color: colors.white,
    letterSpacing: 0.374,
  },
  iconContainer: {
    flex: 0.45,
    justifyContent: "flex-end",
  },
});

export default styles;
