import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { MontserratAlternates_600SemiBold } from "@expo-google-fonts/montserrat-alternates";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation";
import styles from "./styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    MontserratAlternates_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppNavigator />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
