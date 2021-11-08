import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MoneyLimitProps } from "../models/MoneyLimit";
import { fmt } from "../utils/fmtNumber";
import { Text, View } from "./Themed";
const { width, height } = Dimensions.get("window");

export function TouchableMoneyLimit(props: MoneyLimitProps) {
  const { moneyLimit } = props;
  return (
    <TouchableOpacity
      onPress={(event) => {
        props.onPress(event);
      }}
      style={styles.symAvailBan}
    >
      <Text style={styles.symbol}>{moneyLimit.currencyType}</Text>
      <Text style={[styles.symbol, { paddingLeft: 3 }]}>
        {fmt(moneyLimit.value)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  symAvailBan: {
    backgroundColor: "#01D16720",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: width / 3.0 - 30,
    flexDirection: "row",
    marginLeft: 10,
  },
  symbol: {
    paddingTop: 3,
    paddingBottom: 3,
    color: "#01D167",
  },
});
