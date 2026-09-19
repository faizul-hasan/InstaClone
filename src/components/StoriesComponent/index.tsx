import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { StoryData } from './StoryData';
import StoryItem from '@components/StoryItem';
import { Story } from '@utilities/CommonTypes';

const StoriesComponent = () => {
  const handleStoryPress = (story: Story) => {
    console.log('Story pressed:', story.username);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={StoryData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <StoryItem story={item} onPress={handleStoryPress} />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default StoriesComponent;

const styles = StyleSheet.create({
  container: {
    height: 124,
    backgroundColor: '#FFFFFF',
  },

  contentContainer: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    columnGap: 10,
  },
});
