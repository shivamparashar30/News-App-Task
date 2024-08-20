
import { View, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import BreakingNewsCard from "./BreakingNewsCard";

const { width } = Dimensions.get("window");

export default function BreakingNews({ data, label }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("NewsDetails",  {article: item});
  };

  return (
    <View style={{ alignItems: 'center' }}> 
      <Carousel
        loop
        data={data}
        renderItem={({ item }) => (
          <BreakingNewsCard item={item} handleClick={handleClick} />
        )}
        width={width * 0.9} 
        height={width * 0.54} 
        autoPlay={true}
        scrollAnimationDuration={1000} 
        mode="parallax" 
        modeConfig={{
          parallaxScrollingScale: 0.86,
          parallaxScrollingOpacity: 0.6,
        }}
        style={{ alignItems: "center" }}
      />
    </View>
  );
}

