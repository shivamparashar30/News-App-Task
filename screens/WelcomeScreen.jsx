import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc'; // Import twrnc for Tailwind styling

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center pb-6 bg-green-900`}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={[
          {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
          },
        ]}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
      />
      <View style={tw`flex-1 items-center justify-end max-w-[85%] space-y-4`}>
        <Text
          style={[
            tw`font-bold text-4xl shadow-2xl text-white text-center tracking-wider`,
            {
              fontSize: wp(10),
            },
          ]}>
          Stay Informed from Day One
        </Text>
        <Text
          style={[
            tw`font-bold text-white text-center max-w-[85%] leading-12 tracking-wider`,
            {
              fontSize: wp(4),
            },
          ]}>
          Discover the Latest News with our Seamless Onboarding Experience.
        </Text>
      </View>

      <TouchableOpacity
        style={tw`bg-white rounded-full p-4 justify-center items-center w-[80%] my-10`}
        onPress={() => navigation.navigate('Home')}>
        <Text style={tw`text-base text-green-900 `}>Getting Started</Text>
      </TouchableOpacity>
    </View>
  );
}
