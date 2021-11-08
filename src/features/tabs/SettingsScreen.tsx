import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { BottomTabParamList } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { translator } from "../localization/translator";

export default function SettingScreen({
  navigation,
}: StackScreenProps<BottomTabParamList>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: translator("setting"),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
