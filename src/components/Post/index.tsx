import React, { useCallback, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { PostData } from './PostData';
import PostCard from '@components/PostCard.tsx';
import StoriesComponent from '@components/StoriesComponent';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CommentsBottomSheet from '@components/Comments/CommentsBottomSheet';
import { Comment, commentData } from '@components/Comments/commentsData';
import { postStyles } from './styles';

let idCounter = 0;

const Post = () => {
  const commentsSheetRef = useRef<BottomSheetModal>(null);

  // Which post's comment sheet is currently open
  const [activePostId, setActivePostID] = useState<string | null>(null);

  // independent comment instead of sharing one global list
  const [commentsByPost, setCommentsByPost] = useState<
    Record<string, Comment[]>
  >({});

  const openComments = useCallback((postId: string) => {
    setActivePostID(postId);

    setCommentsByPost(prev => {
      // Already has comments (either seeded before, or user already
      // commented here) - don't reset them
      if (prev[postId]) return prev;
      // First time opening this post's comments - seed with a fresh,
      // independent copy of the mock data so posts don't share references
      return { ...prev, [postId]: [...commentData] };
    });
    commentsSheetRef.current?.present();
  }, []);

  const handleAddComment = useCallback(
    (text: string) => {
      if (!activePostId) return;
      idCounter += 1;

      const newComment: Comment = {
        id: `local-${Date.now()}-${idCounter}`,
        username: 'you',
        profileImage: 'https://i.pravatar.cc/150?img=12',
        comment: text,
        likes: '0',
        time: 'now',
      };

      setCommentsByPost(prev => ({
        ...prev,
        [activePostId]: [newComment, ...(prev[activePostId] ?? [])],
      }));
    },
    [activePostId],
  );

  return (
    <View style={postStyles.container}>
      <FlatList
        data={PostData}
        keyExtractor={item => item.id}
        ListHeaderComponent={<StoriesComponent />}
        renderItem={({ item }) => (
          <PostCard post={item} onCommentsPress={() => openComments(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        bounces={true}
      />
      <CommentsBottomSheet
        ref={commentsSheetRef}
        comments={activePostId ? commentsByPost[activePostId] ?? [] : []}
        onAddComment={handleAddComment}
      />
    </View>
  );
};

export default Post;
