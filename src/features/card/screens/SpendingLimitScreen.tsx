import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Text, View } from "../../../components/Themed";
import { BottomTabParamList } from "../../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { translator } from "../../localization/translator";
import { AspireLogo } from "../../../components/AspireLogo";
import { CurrencySymbol } from "../../../components/CurrencySymbol";
import { TouchableBack } from "../../../components/TouchableBack";
import { TouchableMoneyLimit } from "../../../components/TouchableMoneyLimit";
import { useDispatch, useSelector } from "react-redux";
import { updateSpendingMoney } from "../actions";
import { RootState } from "typesafe-actions";
import { CardState } from "../../../models/CardState";

const { width, height } = Dimensions.get("window");
export default function SpendingLimitScreen({
  navigation,
}: StackScreenProps<BottomTabParamList, "SpendingLimit">) {
  const [value, setValue] = useState<string | undefined>("");
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => (state.cardHolder as CardState).error);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => <AspireLogo />,
      headerLeft: () => <TouchableBack />,
    });
  }, [navigation]);

  useEffect(() => {
    if (error != "" && error) {
      Alert.alert("Error", error);
    }
  }, [error]);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView scrollEnabled={false}>
          <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <View style={{ backgroundColor: "#0C365A", flex: 1 }}>
              <Text style={styles.mainTitle}>
                {translator("set_weekly_debbit")}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "white",
                marginTop: 32,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                flex: 4,
                minHeight: width > height ? width : height,
              }}
            >
              {/* weekly debit */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 32,
                  marginLeft: 24,
                  marginRight: 24,
                }}
              >
                <View style={{ flex: 0.1 }}>
                  <Image
                    style={{ height: 16, width: 16 }}
                    source={require("../../../../assets/images/weekly_icon.png")}
                  />
                </View>
                <View style={{ flex: 0.9 }}>
                  <Text style={styles.weeklyDebit}>
                    {translator("set_weekly_debbit")}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 17,
                }}
              >
                <View style={{ flex: 0.3 }}>
                  <CurrencySymbol />
                </View>

                <View style={{ flex: 0.7 }}>
                  <TextInput
                    keyboardType={"number-pad"}
                    value={value + ""}
                    onChange={(val) => setValue(val + "")}
                    style={styles.balanceTitle}
                  />
                </View>
              </View>
              <View
                style={styles.separator}
                lightColor="#ccc"
                darkColor="#cccccc90"
              />
              <Text style={styles.weeklyDesc}>
                {translator("set_weekly_desc")}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginTop: 32,
                }}
              >
                <TouchableMoneyLimit
                  onPress={() => {
                    setValue(5000 + "");
                  }}
                  moneyLimit={{ currencyType: "S$", value: 5000 }}
                />
                <TouchableMoneyLimit
                  onPress={() => {
                    setValue(10000 + "");
                  }}
                  moneyLimit={{ currencyType: "S$", value: 10000 }}
                />
                <TouchableMoneyLimit
                  onPress={() => {
                    setValue(20000 + "");
                  }}
                  moneyLimit={{ currencyType: "S$", value: 20000 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => {
          if (value != "" && value) {
            dispatch(updateSpendingMoney.request(parseInt(value)));
          }
        }}
        style={{
          backgroundColor: "#01D167",
          height: 56,
          width: 300,
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
          marginBottom: 30,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C365A",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 24,
    marginBottom: 24,
    marginTop: 24,
  },
  weeklyDebit: {
    color: "#222222",
    fontSize: 14,
  },
  weeklyDesc: {
    color: "#22222266",
    fontSize: 14,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
  },
  balanceTitle: {
    color: "#222222",
    fontSize: 24,
    fontWeight: "bold",
    paddingRight: 24,
  },
  separator: {
    marginVertical: 5,
    height: StyleSheet.hairlineWidth,
    marginLeft: 24,
    marginRight: 24,
  },
});
