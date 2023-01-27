import { StyleSheet } from "react-native";
import { colors } from "assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: "6%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  tabText: {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 16,
    color: colors.gray3,
  },
  header: {
    flex: 0.4,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
    transform: [{ rotateX: "180deg" }],
  },
  body: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
    marginTop: "-10%",
  },
  renderTabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray4,
  },
  renderTabText: {
    flex: 1,
    alignItems: "center",
  },
  indicator: {
    height: 4,
    width: "40%",
    borderWidth: 1,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.primary,
    marginTop: "2%",
  },
  tabViewContainer: {
    flex: 0.64,
  },
  titleContainer: {
    flex: 0.12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "6%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  titleText: {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 30,
    color: colors.gray1,
    width: 200,
  },
  row: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 0.2,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    shadowColor: colors.black12,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 4,
    shadowRadius: 20,
    elevation: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
