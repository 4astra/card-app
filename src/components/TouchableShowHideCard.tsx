import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { translator } from "../features/localization/translator";
import { Text, View } from "./Themed";
import { reqShowHideCardInfo } from "../features/card/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

export function TouchableShowHideCard() {
  const dispatch = useDispatch();
  const isHidden = useSelector(
    (state: RootState) => state.cardHolder.toggleShowHideCard
  );
  return (
    <View
      style={{ flexDirection: "row-reverse", backgroundColor: "transparent" }}
    >
      <TouchableOpacity
        onPress={() => dispatch(reqShowHideCardInfo.request(true))}
      >
        {!isHidden ? (
          <View style={styles.container}>
            <Image
              style={{
                height: 16,
                width: 16,
                marginTop: 2,
                marginBottom: 10,
                marginRight: 5,
                marginLeft: 12,
              }}
              source={require("../../assets/images/hide.png")}
            />
            <Text style={styles.showHideCardInfoTitle}>
              {translator("hide_card_number")}
            </Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Image
              style={{
                height: 16,
                width: 16,
                marginTop: 2,
                marginBottom: 10,
                marginRight: 5,
                marginLeft: 12,
              }}
              source={require("../../assets/images/remove_red_eye-24px.png")}
            />
            <Text style={styles.showHideCardInfoTitle}>
              {translator("show_card_number")}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  showHideCardInfoTitle: {
    color: "#01D167",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 8,
    paddingBottom: 16,
    paddingRight: 12,
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 24,
    flexDirection: "row",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 50,
  },
});
