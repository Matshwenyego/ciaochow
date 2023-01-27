import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { colors, Icons } from "assets";
import * as SecureStore from "expo-secure-store";
import AuthLayout from "../../components/AuthLayout";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as API from "../../services/default";
import { BASE_URL, EMAIL_REGEX } from "../../utils/constants";
import styles from "./styles";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    if (EMAIL_REGEX.test(email)) {
      return true;
    }
    return false;
  };

  const register = async () => {
    const body = {
      username,
      email,
      password,
    };
    const response = API.post(`${BASE_URL}/api/auth/local/register`, body);
    const obj = await response;
    if (obj) {
      await SecureStore.setItemAsync("jwt", await obj.jwt);
      navigation.navigate("HomeStack");
    }
  };

  return (
    <AuthLayout backgroundColor={colors.white}>
      <AuthHeader
        title={"Register"}
        image={<Icons.CiaoGirl height={316} width={129} />}
        navigation={navigation}
      />
      <View style={styles.inputs}>
        <Input
          label={"username"}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder={"muncher"}
          secureTextEntry={false}
          validate={true}
        />
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
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Register"}
          onPress={() => register()}
          backgroundColor={colors.primary}
          color={colors.white}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.haveAnAccount}>
            Have an account?{" "}
            <Text
              style={[styles.haveAnAccount, { fontFamily: "Inter_700Bold" }]}
            >
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
