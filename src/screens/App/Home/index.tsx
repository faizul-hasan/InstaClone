/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { HomeStyles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '@components/HomeHeader';
import React from 'react';
import Post from '@components/Post';

const HomeSreen = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={HomeStyles.container}>
        <HomeHeader />
        <Post />
      </View>
    </SafeAreaView>
  );
};

export default HomeSreen;
