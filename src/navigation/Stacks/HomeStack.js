import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
