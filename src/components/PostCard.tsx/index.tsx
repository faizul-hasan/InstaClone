import PostActions from '@components/PostAction';
import { PostActionsProps } from '@utilities/CommonTypes';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { PostCardStyles } from './styles';
import MoreIcon from '@assets/Icons/MoreIcon';
import RepostIcon from '@assets/Icons/RepostIcon';
import { colors } from '@utilities/constants/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PostCard = ({ post }: PostActionsProps) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View style={[PostCardStyles.container, { paddingBottom: insets.bottom }]}>
      {/* POST HEADER */}

      <View style={PostCardStyles.header}>
        <View style={PostCardStyles.headerLeft}>
          <Image
            source={{ uri: post.profileImage }}
            style={PostCardStyles.profileImage}
          />

          <Text style={PostCardStyles.username} numberOfLines={1}>
            {post.username}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={PostCardStyles.moreButton}>
          <MoreIcon />
        </TouchableOpacity>
      </View>

      {/* POST IMAGE */}

      <TouchableOpacity
        activeOpacity={0.95}
        style={[
          PostCardStyles.imageContainer,
          {
            width,
            height: width,
          },
        ]}
      >
        <Image
          source={{ uri: post.postImage }}
          style={PostCardStyles.postImage}
          resizeMode="cover"
        />

        {/* Small profile/badge shown in reference */}
        <View style={PostCardStyles.imageBadge}>
          <Image
            source={{ uri: post.profileImage }}
            style={PostCardStyles.badgeImage}
          />

          <View style={PostCardStyles.badgeIcon}>
            <RepostIcon stroke={colors.white} height={12} width={12} />
          </View>
        </View>
      </TouchableOpacity>

      {/* ACTIONS */}

      <PostActions post={post} />

      {/*LIKED BY*/}

      <View style={PostCardStyles.likeContainer}>
        <Text style={PostCardStyles.likedByText}>
          Liked by <Text style={PostCardStyles.boldText}>{post.likedBy}</Text>{' '}
          and{' '}
          <Text style={PostCardStyles.boldText}>
            {post.likedByCount} others
          </Text>
        </Text>
      </View>

      {/* CAPTION */}

      <View style={PostCardStyles.captionContainer}>
        <Text style={PostCardStyles.caption} numberOfLines={2}>
          <Text style={PostCardStyles.boldText}>{post.username}</Text>{' '}
          {post.caption}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
