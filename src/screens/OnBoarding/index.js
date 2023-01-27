import { View, Text } from "react-native";
import { colors, Icons } from "assets";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import styles from "./styles";

export default function OnBoarding({ navigation }) {
  return (
    <AuthLayout backgroundColor={colors.primary}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CiaoChow</Text>
        <Icons.CiaoLogo height={31} width={28} fill={colors.white} />
      </View>
      <View style={styles.headerImages}>
        <Icons.CiaoGirl height={289} width={144} fill={colors.white} />
        <Icons.CiaoBoy height={289} width={144} fill={colors.white} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.desctiptionText}>
          Hungry?{" "}
          <Text
            style={[
              styles.desctiptionText,
              { fontSize: 16, fontFamily: "Inter_700Bold" },
            ]}
          >
            CiaoChow
          </Text>{" "}
          helps{"\n"} you find something to eat.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Get Started"}
          onPress={() => navigation.navigate("Register")}
          backgroundColor={colors.white}
          color={colors.primary}
        />
      </View>
      <View style={styles.ellipses}>
        <Icons.Ellipses />
      </View>
    </AuthLayout>
  );
}
