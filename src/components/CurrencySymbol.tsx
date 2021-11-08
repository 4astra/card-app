import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export function CurrencySymbol() {
  return (
    <View style={styles.symAvailBan}>
      <Text style={styles.symbol}>{"S$"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  symAvailBan: {
    backgroundColor: "#01D167",
    borderRadius: 3,
    alignItems: "center",
    marginLeft: 24,
    marginRight: 22,
  },
  symbol: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
    color: "#fff"
  },
});
