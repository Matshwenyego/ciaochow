import Axios from "axios";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
};

const instance = Axios.create();
instance.interceptors.request.use(
  async function (config) {
    const jwt = await SecureStore.getItemAsync("jwt");
    config.headers.Authorization = "Bearer " + jwt;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export async function get(url) {
  const response = instance.get(url, headers);
  try {
    const responseJson = await response;
    return responseJson.data;
  } catch (err) {
    if (err.response) {
      Alert.alert(
        err.response.data.error.name,
        err.response.data.error.message,
        [{ text: "Close" }]
      );
    }
    return err;
  }
}

export async function post(url, params) {
  const response = Axios.post(url, params, headers);
  try {
    const responseJson = await response;
    return responseJson.data;
  } catch (err) {
    if (err.response) {
      Alert.alert(
        err.response.data.error.name,
        err.response.data.error.message,
        [{ text: "Close" }]
      );
    }
  }
}
