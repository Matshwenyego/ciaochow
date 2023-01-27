import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../../screens/OnBoarding";
import Register from "../../screens/Register";
import Login from "../../screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function OnBoardingStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
