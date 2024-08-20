import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

const NewsDetails = ({route}) => {
  const {article} = route.params || {};
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  // Function to format date and time separately
  const formatDateAndTime = dateString => {
    if (!dateString) return {date: '', time: ''};
    const date = new Date(dateString);

    // Format date and time separately
    const formattedDate = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });

    return {date: formattedDate, time: formattedTime};
  };

  const {date, time} = formatDateAndTime(article.publishedAt);

  if (!article) {
    return (
      <SafeAreaView style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-black text-xl`}>No Article Details Available</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      {/* Header with Back Button */}
      <View style={tw`flex-row items-center p-4`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw`pl-2 rounded-md`}>
          <Text
            style={tw`text-md text-green-800 dark:text-white font-extrabold uppercase`}>
            News Home
          </Text>
        </Pressable>
      </View>

      {/* Newspaper-Style Header */}
      <View style={tw`p-4 border-b border-gray-300 mb-4`}>
        <Text style={tw`text-gray-600 text-sm text-left`}>{date}</Text>
        <Text
          style={tw`text-gray-600 text-sm text-right absolute right-4 top-4`}>
          {time}
        </Text>
      </View>

      {/* Centered Title */}
      <Text
        style={[
          tw`text-green-800 text-3xl font-bold text-center mb-4`,
          {fontFamily: 'Times New Roman', letterSpacing: 1},
        ]}>
        {article.title}
      </Text>

      {/* Image and Description */}
      <ScrollView contentContainerStyle={tw`px-5`}>
        <Image
          source={{uri: article.urlToImage}}
          style={[
            tw`rounded-lg mb-4`,
            {width: width * 0.92, height: height * 0.4},
          ]}
        />
        <Text style={tw`text-black text-lg leading-7`}>
          {article.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetails;
