import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabParamList } from "../types";
import { translator } from "../features/localization/translator";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import SettingScreen from "../features/tabs/SettingsScreen";
import CardScreen from "../features/card/screens/CardScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();
const TabThreeStack = createStackNavigator<BottomTabParamList>();
const Stack = createStackNavigator<BottomTabParamList>();

function SettingTabStack() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen name="Setting" component={SettingScreen} />
    </TabThreeStack.Navigator>
  );
}

function DebitStack() {
  return (
    <Stack.Navigator>
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
        name="DebitCard2"
        component={CardScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
export default function HomeTabs() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        style: {
          backgroundColor: Colors[colorScheme].background,
        },
      }}
    >
      <Tab.Screen
        name="DebitCard"
        component={DebitStack}
        options={{
          tabBarLabel: translator("card"),
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              style={{ marginBottom: -3 }}
              name="list-ol"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingTabStack}
        options={{
          tabBarLabel: translator("setting"),
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              style={{ marginBottom: -3 }}
              name="settings"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
