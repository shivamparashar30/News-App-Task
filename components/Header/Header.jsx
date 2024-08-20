import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc"; // Import twrnc for Tailwind styling

export default function Header() {


  return (
    <View style={tw`flex-row justify-between items-center mx-4 mt-4`}>
      <View>
        <Text
          style={[
            tw`text-2xl text-green-800 dark:text-white font-extrabold uppercase`,
          ]}
        >
          Today's news
        </Text>
      </View>

      
    </View>
  );
}
