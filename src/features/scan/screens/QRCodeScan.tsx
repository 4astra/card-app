import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Button,
  Animated,
  Text as RText,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import { RootStackParamList } from "../../../types";
import { StackScreenProps } from "@react-navigation/stack";
import Colors from "../../../constants/Colors";
import { translator } from "../../localization/translator";

export default function QRCodeScan({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.socialNetwork.isLoading
  );
  const [hasPermission, setHasPermission] = useState({});
  const [scanned, setScanned] = useState(false);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );
  const [animationLineHeight, setAnimationLineHeight] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: translator("scan_title"),
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          <TouchableOpacity
            onPress={() => {
              if (!scanned) {
                navigation.goBack();
              } else {
                navigation.goBack();
              }
            }}
          >
            <RText style={{ color: Colors.blue.text }}>
              {scanned ? translator("done") : translator("close")}
            </RText>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => <View />,
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == PermissionStatus.GRANTED ? true : false);
    })();
  }, []);

  useEffect(() => {
    if (!scanned) {
      animateLine();
    }
    return () => {
      setScanned(true);
    };
  }, [scanned]);

  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!scanned) {
        animateLine();
      }
    });
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator color="red" size="large" /> : <View />}
      <View
        style={{
          flex: 1,
          //   height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "black",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, { justifyContent: "center" }]}
        >
          <Animated.View
            onLayout={(e) =>
              setAnimationLineHeight({
                x: e.nativeEvent.layout.x,
                y: e.nativeEvent.layout.y,
                height: e.nativeEvent.layout.height,
                width: e.nativeEvent.layout.width,
              })
            }
            style={{
              width: 250,
              height: 1.0,
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: Colors.red.text,
              transform: [
                {
                  translateY: focusLineAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 250],
                  }),
                },
              ],
            }}
          />
          <View
            style={{
              width: 250,
              height: 250,
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "#ffffff09", //"transparent",
            }}
          />
        </BarCodeScanner>
      </View>

      {scanned ? (
        <View
          style={{
            alignItems: "center",
            marginBottom: 50,
            backgroundColor: "#000",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (!scanned) {
                navigation.goBack();
              } else {
                navigation.goBack();
              }
            }}
          >
            <RText style={{ color: Colors.blue.text }}>
              {translator("try_again")}
            </RText>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}

QRCodeScan.defaultNavigationOptions = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => ({
  gestureEnabled: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
