// import { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, assets, FONTS, SHADOWS } from "../constants";

import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

const Details = ({ route, navigation }) => {
  console.log("🚀 ~ file: Details.js ~ line 23 ~ Details ~ route", route);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text> Opa</Text>
    </SafeAreaView>
  );
};

export default Details;
