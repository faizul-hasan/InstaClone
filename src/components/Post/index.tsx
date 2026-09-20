import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PostData } from './PostData';
import PostCard from '@components/PostCard.tsx';
import StoriesComponent from '@components/StoriesComponent';
import { colors } from '@utilities/constants/common';

const Post = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PostData}
        keyExtractor={item => item.id}
        ListHeaderComponent={<StoriesComponent />}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        bounces={true}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
