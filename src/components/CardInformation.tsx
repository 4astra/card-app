import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { CardState } from "../models/CardState";

export function CardInformation() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvvCode, setCVVCode] = useState<string>("");
  const cardHolder = useSelector(
    (state: RootState) => (state.cardHolder as CardState).cardInfo
  );
  const isHidden = useSelector(
    (state: RootState) => (state.cardHolder as CardState).toggleShowHideCard
  );
  useEffect(() => {
    if (isHidden) {
      setCVVCode("***");
      let arrCards = cardHolder != undefined ? cardHolder.cardNumber.split(" ") : [];
      if (arrCards && arrCards.length == 4) {
        const cardSec = "●●●● " + "●●●● " + "●●●● " + arrCards[3];
        setCardNumber(cardSec);
      }
    } else {
      setCVVCode(cardHolder.cvvCode + "");
      setCardNumber(cardHolder.cardNumber);
    }
  }, [isHidden, cardHolder]);

  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row-reverse", backgroundColor: "transparent" }}
      >
        <Image
          style={{ width: 74, height: 21, marginTop: 24, marginRight: 24 }}
          source={require("../../assets/images/card_logo.png")}
        />
      </View>
      <Text style={styles.holderName}>{cardHolder.holderName}</Text>
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
        <Text style={styles.goodThrough}>
          {"Thru: " + cardHolder.goodThrough}
        </Text>
        <Text style={styles.cvvCode}>{"CVV: " + cvvCode}</Text>
      </View>
      <View
        style={{ flexDirection: "row-reverse", backgroundColor: "transparent" }}
      >
        {cardHolder.cardType == "visa" ? (
          <Image
            style={{ width: 59, height: 20, marginTop: 24, marginRight: 24 }}
            source={require("../../assets/images/Visa_Logo.png")}
          />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardNumber: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 24,
    letterSpacing: 4,
  },
  cvvCode: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 24,
    fontSize: 14,
  },
  goodThrough: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 24,
  },
  container: {
    backgroundColor: "#01D167",
    height: 220,
    borderRadius: 16,
    marginLeft: 24,
    marginRight: 24,
    marginTop: -75,
  },
  holderName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 24,
  },
});
