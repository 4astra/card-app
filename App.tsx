import React, { Fragment } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import {
  setUpLocale,
  setUpTranslation,
} from "./src/features/localization/translator";
import { View, Text } from "react-native";

// Set the key-value pairs for the different languages you want to support.
setUpTranslation();

// Set the locale once at the beginning of your app.
setUpLocale();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
        <Text>...</Text>
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Navigation colorScheme={colorScheme} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
