import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: "5%",
  },
  headerText: {
    width: 169,
    height: 34,
    fontSize: 28.0354,
    fontFamily: "MontserratAlternates_600SemiBold",
    lineHeight: 34,
    textAlign: "center",
    verticalAlign: "middle",
    color: colors.white,
  },
  headerImages: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  descriptionContainer: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  desctiptionText: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
    lineHeight: 30,
    color: colors.white,
  },
  buttonContainer: {
    flex: 0.18,
    justifyContent: "center",
    alignItems: "center",
  },
  ellipses: {
    flex: 0.1,
    alignItems: "center",
  },
});

export default styles;
