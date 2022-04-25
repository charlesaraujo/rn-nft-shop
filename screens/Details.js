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

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        img={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        img={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <FocusedStatusBar
          barStyle="dak-content"
          backgroudColor="transparent"
          transLucent={true}
        />
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 24,
            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rbga(255,255,255,0.5)",
            zIndex: 1,
          }}
        >
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
        <FlatList
          style={{ backgroundColor: COLORS.white }}
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo bids={data.bids} />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />
                {data.bids.length > 0 && (
                  <Text
                    style={{
                      fontSize: SIZES.font,
                      fontFamily: FONTS.semiBold,
                      color: COLORS.primary,
                    }}
                  >
                    Lance atual
                  </Text>
                )}
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Details;
