import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { BottomTabParamList } from "../types";
import HomeTabs from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { navigationRef } from "./RootNavigation";
import SpendingLimitScreen from "../features/card/screens/SpendingLimitScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      ref={navigationRef}
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<BottomTabParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="DebitCard"
        component={HomeTabs}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#0C365A",
            shadowColor: "transparent",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="SpendingLimit"
        component={SpendingLimitScreen}
      />
    </Stack.Navigator>
  );
}
