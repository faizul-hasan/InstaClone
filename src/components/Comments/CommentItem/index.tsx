import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Comment } from '../commentsData';
import HeartIcon from '@assets/Icons/HeartIcon';
import { colors } from '@utilities/constants/common';
import { CommentItemStyles } from './styles';

interface CommentItemProps {
  item: Comment;
}

const CommentItem = ({ item }: CommentItemProps) => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <View style={CommentItemStyles.container}>
      <Image
        source={{ uri: item.profileImage }}
        style={CommentItemStyles.avatar}
      />

      <View style={CommentItemStyles.content}>
        <View style={CommentItemStyles.commentRow}>
          <View style={CommentItemStyles.textContainer}>
            <Text style={CommentItemStyles.username}>{item.username}</Text>

            <Text style={CommentItemStyles.comment}>{item.comment}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={CommentItemStyles.heartButton}
            onPress={() => setLike(true)}
          >
            {like ? (
              <HeartIcon
                height={20}
                width={20}
                strokeWidth={1.75}
                stroke={colors.red}
                fill={colors.red}
                onPress={() => setLike(false)}
              />
            ) : (
              <HeartIcon
                height={20}
                width={20}
                strokeWidth={1.75}
                stroke={colors.gray}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={CommentItemStyles.metaRow}>
          <Text style={CommentItemStyles.meta}>{item.time}</Text>

          <Text style={CommentItemStyles.meta}>{item.likes} likes</Text>

          <TouchableOpacity>
            <Text style={CommentItemStyles.reply}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
