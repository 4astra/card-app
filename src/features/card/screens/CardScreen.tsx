import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
  FlatList,
} from "react-native";
import { Text, View } from "../../../components/Themed";
import { BottomTabParamList } from "../../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { translator } from "../../localization/translator";
import { AspireLogo } from "../../../components/AspireLogo";
import { Configuration } from "../../../models/Configuration";
import { CurrencySymbol } from "../../../components/CurrencySymbol";
import { CardInformation } from "../../../components/CardInformation";
import { TouchableShowHideCard } from "../../../components/TouchableShowHideCard";
import { ConfigurationItem } from "../../../components/ConfigurationItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { fetchCardHolder, fetchCardSpending } from "../actions";
import { SpendingLimit } from "../../../models/SpendingLimit";
import { SpendingLimitComp } from "../../../components/SpendingLimitComp";
import { fmt } from "../../../utils/fmtNumber";
import { CardState } from "../../../models/CardState";

// Declare Body Props use
type BodyContentProps = {
  configs: Configuration[];
};

export default function CardScreen({
  navigation,
}: StackScreenProps<BottomTabParamList, "DebitCard">) {
  const dispatch = useDispatch();
  const [fetchedCardHolder, setFetchedCardHolder] = useState<boolean>(false);

  useEffect(() => {
    // card info
    dispatch(fetchCardHolder.request("loading"));
    // card spending
    dispatch(fetchCardSpending.request("loading"));
  }, [fetchedCardHolder]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerShown: true,
      headerRight: () => <AspireLogo />,
    });
  }, [navigation]);

  const [configs, setConfigs] = useState<Configuration[]>([
    {
      id: 1,
      title: "Top-up account",
      subTitle:
        "Deposit money to your account to use with card your account to use with card",
      hasSwitcheIcon: false,
      isSwitched: false,
      iconName: null,
      action: null,
    },
    {
      id: 2,
      title: "Weekly spending limit",
      subTitle: "You haven’t set any spending limit on card",
      hasSwitcheIcon: true,
      isSwitched: false,
      iconName: null,
      action: "SpendingLimit",
    },
    {
      id: 3,
      title: "Freeze card",
      subTitle: "Your debit card is currently active",
      hasSwitcheIcon: true,
      isSwitched: false,
      iconName: null,
      action: null,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        style={{ backgroundColor: "transparent" }}
        data={[0]}
        initialNumToRender={1}
        renderItem={({ item }) => <BodyContent key="body" configs={configs} />}
        getItemCount={(data: any) => 1}
        getItem={(data: any, index: number) => 1}
        key="xba"
      />
    </SafeAreaView>
  );
}

const BodyContent = (props: BodyContentProps) => {
  // const cardHolder = useSelector(
  //   (state: RootState) => state.cardHolder.cardInfo as CardHolder
  // );
  const spend = useSelector(
    (state: RootState) =>
      (state.cardHolder as CardState).spendingLimit as SpendingLimit
  );
  const { configs } = props;
  return (
    <View style={{ backgroundColor: "transparent" }}>
      {/* Information */}
      <Text style={styles.mainTitle}>{translator("debit_card")}</Text>

      {/* Available Balance */}
      <Text style={styles.subTitle}>{translator("available_balance")}</Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "transparent",
          alignItems: "center",
        }}
      >
        <CurrencySymbol />
        <Text style={styles.balanceTitle}>
          {fmt(spend.limitSpending - spend.nowSpending)}
        </Text>
      </View>

      {/* Hide/Show Card Info */}
      <TouchableShowHideCard />

      {/* Detail */}
      <View
        style={{
          marginTop: 60,
          backgroundColor: "white",
          height: "100%",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <CardInformation />
        <SpendingLimitComp />
        <FlatList<Configuration>
          style={{ marginTop: 32 }}
          data={configs}
          renderItem={({ item, index }) => (
            <ConfigurationItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

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
  subTitle: {
    color: "white",
    fontSize: 14,
    marginLeft: 24,
    marginBottom: 10,
  },
  balanceTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
