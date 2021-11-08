import React, {} from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

export function AspireLogo() {
  return (
    <TouchableOpacity
      style={{ alignItems: "flex-end", backgroundColor: "transparent" }}
    >
      <Image
        style={styles.logoStyle}
        source={require("../../assets/images/Logo.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 25,
    height: 25,
    marginRight: 24,
  },
});
