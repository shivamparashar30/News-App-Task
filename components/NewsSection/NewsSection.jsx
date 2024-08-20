import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function NewsSection({newsProps}) {
  const navigation = useNavigation();

  function formatDate(isoDate) {
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  }

  function trimDesc(description, wordLimit) {
    if (!description) return '';
    const wordsArray = description.split(' ');
    if (wordsArray.length <= wordLimit) {
      return description;
    }
    return wordsArray.slice(0, wordLimit).join(' ') + '...';
  }

  const handleGestureEvent = ({nativeEvent}, item) => {
    if (nativeEvent.translationX < -50) {
      // Detects a left swipe
      navigation.navigate('NewsDetails', {article: item});
    }
  };

  const renderItem = ({item}) => {
    return (
      <PanGestureHandler
        onGestureEvent={event => handleGestureEvent(event, item)}>
        <Animated.View style={tw`mb-4 mx-4 space-y-1 border-b-[0.1]`}>
          <View style={tw`flex-row p-1 pb-2 justify-start w-[100%] shadow-sm`}>
            <View style={tw`items-start justify-start w-[20%]`}>
              <Image
                source={{
                  uri:
                    item.urlToImage ||
                    'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={[{width: hp(9), height: hp(10)}, tw`rounded-lg`]}
                resizeMode="cover"
              />
            </View>

            <View style={tw`w-[70%] pl-4 justify-center space-y-1 `}>
              <Text
                style={tw`text-xs font-bold text-gray-900 dark:text-neutral-300`}>
                {item?.author?.length > 20
                  ? item.author.slice(0, 20) + '...'
                  : item.author}
              </Text>

              <Text
                style={[
                  tw`text-neutral-800 capitalize max-w-[90%] dark:text-white`,
                  {fontSize: hp(1.7), fontFamily: 'SpaceGroteskBold'},
                ]}>
                {item.title.length > 50
                  ? item.title.slice(0, 50) + '...'
                  : item.title}
              </Text>

              <Text style={tw`text-xs text-gray-700 dark:text-neutral-300`}>
                {formatDate(item.publishedAt)}
              </Text>

              <Text style={tw`text-xs text-gray-700 dark:text-neutral-300`}>
                {trimDesc(item.description, 200)}
              </Text>
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <View style={tw`space-y-2 bg-white dark:bg-neutral-900`}>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={newsProps}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
