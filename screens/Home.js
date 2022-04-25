import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (text) => {
    if (!text.lenght) setNftData(NFTData);
    const filteredData = NFTData.filter((item) =>
      item.name.trim().toLowerCase().includes(text.toLowerCase())
    );
    if (filteredData.length) setNftData(filteredData);
    else setNftData(NFTData);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
