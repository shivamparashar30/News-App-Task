import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import MiniHeader from '../components/Header/MiniHeader';
import BreakingNews from '../components/BreakingNews';
import {useQuery} from '@tanstack/react-query';
// import {fetchBreakingNews, fetchRecommendedNews} from '../../utils/NewsApi';
import {fetchBreakingNews, fetchRecommendedNews} from '../utils/NewsApi';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loading from '../components/Loading/Loading';
import NewsSection from '../components/NewsSection/NewsSection';
import tw from 'twrnc';

const HomeScreen = () => {
  const {data: breakingNewsData, isLoading: isBreakingLoading} = useQuery({
    queryKey: ['breakingNews'],
    queryFn: fetchBreakingNews,
  });

  const {data: recommendedNewsData, isLoading: isRecommendedLoading} = useQuery(
    {
      queryKey: ['recommendedNews'],
      queryFn: fetchRecommendedNews,
    },
  );
  return (
    <SafeAreaView>
      <Header />
      {/* Breaking News */}
      {isBreakingLoading ? (
        <Loading />
      ) : (
        <View>
          <MiniHeader label="Breaking News" />
          {breakingNewsData && breakingNewsData.articles ? (
            <BreakingNews
              label="Breaking News"
              data={breakingNewsData.articles}
            />
          ) : (
            <View>
              <Text>No Breaking News Available</Text>
            </View>
          )}
        </View>
      )}
      {/* Recommended News */}
      <View style={tw` mt-50`}>
        <MiniHeader label="Recommended" />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: hp(80),
          }}>
          {isRecommendedLoading ? (
            <Loading />
          ) : recommendedNewsData && recommendedNewsData.articles ? (
            <NewsSection
              label="Recommendation"
              newsProps={recommendedNewsData.articles}
            />
          ) : (
            <View>
              <Text>No Recommended News Available</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
