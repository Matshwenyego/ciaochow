import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Icons, colors } from "assets";
import * as SecureStore from "expo-secure-store";
import AuthLayout from "../../components/AuthLayout";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as API from "../../services/default";
import { BASE_URL, EMAIL_REGEX } from "../../utils/constants";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    if (EMAIL_REGEX.test(email)) {
      return true;
    }
    return false;
  };

  const login = async () => {
    const body = {
      identifier: email,
      password,
    };
    const response = API.post(`${BASE_URL}/api/auth/local`, body);
    const obj = await response;
    if (obj) {
      await SecureStore.setItemAsync("jwt", await obj.jwt);
      navigation.navigate("HomeStack");
    }
  };

  return (
    <AuthLayout backgroundColor={colors.white}>
      <AuthHeader
        title={"Login"}
        image={<Icons.CiaoBoy height={317} width={158} />}
        navigation={navigation}
      />
      <View style={styles.inputs}>
        <Input
          label={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder={"yourmail@mail.com"}
          secureTextEntry={false}
          validate={validateEmail()}
        />
        <Input
          label={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder={"your password"}
          secureTextEntry={true}
          validate={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Login"}
          onPress={() => login()}
          backgroundColor={colors.primary}
          color={colors.white}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.dontHaveAnAccount}>
            Don’t have an account?{" "}
            <Text
              style={[
                styles.dontHaveAnAccount,
                { fontFamily: "Inter_700Bold" },
              ]}
            >
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
