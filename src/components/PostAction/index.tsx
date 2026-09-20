import BookmarkIcon from '@assets/Icons/BookmarkIcon';
import CommentIcon from '@assets/Icons/CommentIcon';
import HeartIcon from '@assets/Icons/HeartIcon';
import RepostIcon from '@assets/Icons/RepostIcon';
import SendIcon from '@assets/Icons/SendIcon';
import { PostActionsProps } from '@utilities/CommonTypes';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PostActionStyles } from './styles';
import { colors } from '@utilities/constants/common';

const PostActions = ({ post }: PostActionsProps) => {
  const [onClick, setOnClick] = useState<boolean>(false);
  return (
    <View style={PostActionStyles.container}>
      <View style={PostActionStyles.leftActions}>
        {/* LIKE */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={PostActionStyles.action}
          onPress={() => setOnClick(true)}
        >
          {onClick ? (
            <HeartIcon
              strokeWidth={0}
              fill={colors.red}
              onPress={() => setOnClick(false)}
              height={25}
              width={25}
            />
          ) : (
            <HeartIcon strokeWidth={2} />
          )}

          <Text style={PostActionStyles.count}>{post.likes}</Text>
        </TouchableOpacity>

        {/* COMMENT */}

        <TouchableOpacity activeOpacity={0.7} style={PostActionStyles.action}>
          <CommentIcon />

          <Text style={PostActionStyles.count}>{post.comments}</Text>
        </TouchableOpacity>

        {/* REPOST */}

        <TouchableOpacity activeOpacity={0.7} style={PostActionStyles.action}>
          <RepostIcon />

          <Text style={PostActionStyles.count}>{post.reposts}</Text>
        </TouchableOpacity>

        {/* SHARE */}

        <TouchableOpacity activeOpacity={0.7} style={PostActionStyles.action}>
          <SendIcon />

          <Text style={PostActionStyles.count}>{post.shares}</Text>
        </TouchableOpacity>
      </View>

      {/* BOOKMARK */}

      <TouchableOpacity
        activeOpacity={0.7}
        style={PostActionStyles.bookmarkButton}
      >
        <BookmarkIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PostActions;
