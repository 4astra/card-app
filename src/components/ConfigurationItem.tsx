import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Switch } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { Text, View } from "../components/Themed";
import { ConfigurationItemProps } from "../models/Configuration";
import { SpendingLimit } from "../models/SpendingLimit";
import { navigate } from "../navigation/RootNavigation";

export function ConfigurationItem(props: ConfigurationItemProps) {
  const spending = useSelector(
    (state: RootState) => state.cardHolder.spendingLimit as SpendingLimit
  );
  const { item, index } = props;
  return (
    <View>
      {item.hasSwitcheIcon == false ? (
        <View>
          <View style={[styles.container, { marginTop: index == 0 ? 0 : 32 }]}>
            <View style={styles.left}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../../assets/images/insight.png")}
              />
            </View>
            <View style={styles.right}>
              <Text style={styles.listMainTitle}>{item.title}</Text>
              <Text style={styles.listSubTitle}>{item.subTitle}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View
            style={[
              styles.container,
              {
                marginTop: index == 0 ? 0 : 32,
              },
            ]}
          >
            <View style={styles.left}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../../assets/images/insight.png")}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                if (item.hasSwitcheIcon && item.action != undefined) {
                  navigate(item.action);
                }
              }}
              style={styles.middle}
            >
              <Text style={styles.listMainTitle}>{item.title}</Text>
              {item.id == 2 && spending.nowSpending != 0 ? (
                <Text />
              ) : (
                <Text style={styles.listSubTitle}>{item.subTitle}</Text>
              )}
            </TouchableOpacity>
            <View style={styles.middleRight}>
              {item.id == 2 && spending.nowSpending != 0 ? (
                <Switch
                  value={true}
                  onValueChange={(value: boolean) => {
                    if (
                      item.hasSwitcheIcon &&
                      value &&
                      item.action != undefined
                    ) {
                      navigate(item.action);
                    }
                  }}
                />
              ) : (
                <Switch
                  onValueChange={(value: boolean) => {
                    if (
                      item.hasSwitcheIcon &&
                      value &&
                      item.action != undefined
                    ) {
                      navigate(item.action);
                    }
                  }}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listSubTitle: {
    color: "#22222260",
    fontSize: 13,
  },
  listMainTitle: {
    color: "#25345F",
    fontSize: 14,
    fontWeight: "400",
  },
  container: {
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 24,
  },
  left: {
    width: 32,
    height: 32,
    flex: 0.1,
    backgroundColor: "transparent",
  },
  right: {
    flex: 0.9,
    backgroundColor: "transparent",
    marginLeft: 12,
  },
  middle: {
    flex: 0.75,
    backgroundColor: "transparent",
    marginLeft: 12,
  },
  middleRight: { flex: 0.15, justifyContent: "flex-end" },
});
