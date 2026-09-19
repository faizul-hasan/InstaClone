import { StoryItemProps } from '@utilities/CommonTypes';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StoryItemStyles } from './styles';

const StoryItem = ({ story, onPress }: StoryItemProps) => {
  const handlePress = () => {
    onPress?.(story);
  };

  if (story.isYourStory) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={StoryItemStyles.storyContainer}
        onPress={handlePress}
      >
        <View style={StoryItemStyles.yourStoryImageContainer}>
          <Image
            source={{ uri: story.image }}
            style={StoryItemStyles.storyImage}
            resizeMode="cover"
          />

          <View style={StoryItemStyles.addStoryButton}>
            <Text style={StoryItemStyles.plusText}>+</Text>
          </View>
        </View>

        <Text
          style={StoryItemStyles.username}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {story.username}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={StoryItemStyles.storyContainer}
      onPress={handlePress}
    >
      <LinearGradient
        colors={['#FEDA75', '#FA7E1E', '#D62976', '#962FBF', '#4F5BD5']}
        start={{ x: 0.1, y: 0.9 }}
        end={{ x: 0.9, y: 0.1 }}
        style={StoryItemStyles.storyRing}
      >
        <View style={StoryItemStyles.storyImageWrapper}>
          <Image
            source={{ uri: story.image }}
            style={StoryItemStyles.storyImage}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <Text
        style={StoryItemStyles.username}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {story.username}
      </Text>
    </TouchableOpacity>
  );
};

export default StoryItem;
