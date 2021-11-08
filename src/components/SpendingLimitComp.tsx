import React, { useState, useEffect } from "react";
import { SpendingLimit } from "../models/SpendingLimit";
import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import { translator } from "../features/localization/translator";
import { RootState } from "typesafe-actions";
import { useSelector } from "react-redux";
import { fmt } from "../utils/fmtNumber";

export function SpendingLimitComp() {
  const spending = useSelector(
    (state: RootState) => state.cardHolder.spendingLimit as SpendingLimit
  );

  const [nowSpending, setNowPending] = useState<number>(0);
  const [remainSpending, setRemainSpending] = useState<number>(0);
  useEffect(() => {
    setNowPending(spending.nowSpending / spending.limitSpending);
    setRemainSpending(
      (spending.limitSpending - spending.nowSpending) / spending.limitSpending
    );
  }, [spending]);
  return (
    <View>
      {/* Info */}
      <View style={{ flexDirection: "row", marginTop: 26 }}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.spendingInfo}>{translator("debit_desc")}</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 24,
          }}
        >
          <Text style={styles.nowSpending}>
            ${fmt(spending.nowSpending)} |{" "}
          </Text>
          <Text style={styles.limitSpending}>
            ${fmt(spending.limitSpending)}
          </Text>
        </View>
      </View>
      {/* Process */}
      <View style={{ paddingTop: 6, marginLeft: 24, marginRight: 24 }}>
        {nowSpending >= 1 ? (
          <View style={[styles.spendingDoneProcees, { flex: 1 }]} />
        ) : (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={[
                styles.nowSpendingProcees,
                { flex: 1.0 - remainSpending },
              ]}
            />
            <View style={{ flex: 1.0 - nowSpending }} />
          </View>
        )}

        <View
          style={[
            styles.completedSpendingProccess,
            { marginTop: -14.85, flex: 1 },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spendingInfo: {
    color: "#222222",
    fontSize: 13,
    fontWeight: "400",
    paddingLeft: 24,
  },
  nowSpending: {
    color: "#01D167",
    fontSize: 13,
    fontWeight: "bold",
  },
  limitSpending: {
    color: "#22222233",
    fontSize: 13,
    fontWeight: "400",
  },
  nowSpendingProcees: {
    height: 15,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    borderRightWidth: 7,
    borderTopWidth: 15,
    borderRightColor: "transparent",
    borderTopColor: "#01D167",
  },
  completedSpendingProccess: {
    backgroundColor: "#01D16740",
    height: 15,
    borderRadius: 6,
  },
  spendingDoneProcees: {
    backgroundColor: "#01D167",
    height: 15,
    borderRadius: 6,
  },
});
