import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function TouchableBack() {
  const navigator = useContext<any>(NavigationContext);
  return (
    <TouchableOpacity
      onPress={() => {
        if (navigator) {
          navigator.pop();
        }
      }}
      style={{ alignItems: "flex-end", backgroundColor: "transparent" }}
    >
      <Ionicons
        style={styles.logoStyle}
        name="ios-chevron-back"
        size={30}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    marginLeft: 24,
  },
});
