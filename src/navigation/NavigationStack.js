import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingStack from "./Stacks/OnboardingStack";
import HomeStack from "./Stacks/HomeStack";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator
      initialRouteName={"OnboardingStack"}
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Screen
        name="OnboardingStack"
        component={OnboardingStack}
        options={{
          animationEnabled: true,
        }}
      />
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          animationEnabled: true,
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
