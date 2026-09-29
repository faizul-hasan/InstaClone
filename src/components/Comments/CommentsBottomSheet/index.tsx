import React, { forwardRef, useCallback, useMemo, useRef } from 'react';

import { Text, View } from 'react-native';

import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
  BottomSheetFooter,
  BottomSheetFooterProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import CommentItem from '../CommentItem';
import { Comment } from '../commentsData';
import CommentInputFooter from '../CommentInputFooter';
import { CommentBootmSheetStyles } from './styles';

const CURRENT_USER_AVATAR = 'https://i.pravatar.cc/150?img=12';

interface CommentBootomSheetProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

// Comments and the add-comment handler are now passed in as props, owned by
// the parent (Post.tsx), which knows which post is currently active. This
// sheet is purely a display + input surface - it no longer holds its own
// comment list, which is what was causing all posts to share one list.
const CommentsBottomSheet = forwardRef<
  BottomSheetModal,
  CommentBootomSheetProps
>(({ comments, onAddComment }, ref) => {
  const snapPoints = useMemo(() => ['50%', '92%'], []);
  const listRef = useRef<BottomSheetFlatListMethods>(null);

  const renderComment = useCallback(
    ({ item }: { item: Comment }) => <CommentItem item={item} />,
    [],
  );

  const handlePost = useCallback(
    (text: string) => {
      onAddComment(text);
      requestAnimationFrame(() => {
        listRef.current?.scrollToOffset({ offset: 0, animated: true });
      });
    },
    [onAddComment],
  );

  const renderFooter = useCallback(
    (footerProps: BottomSheetFooterProps) => (
      <BottomSheetFooter {...footerProps} bottomInset={0}>
        <CommentInputFooter avatar={CURRENT_USER_AVATAR} onPost={handlePost} />
      </BottomSheetFooter>
    ),
    [handlePost],
  );

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose
      enableOverDrag={false}
      backgroundStyle={CommentBootmSheetStyles.background}
      handleIndicatorStyle={CommentBootmSheetStyles.handleIndicator}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      footerComponent={renderFooter}
    >
      {/* HEADER */}

      <View style={CommentBootmSheetStyles.header}>
        <Text style={CommentBootmSheetStyles.title}>Comments</Text>
      </View>

      {/* COMMENTS */}

      <BottomSheetFlatList
        ref={listRef}
        data={comments}
        keyExtractor={item => item.id}
        renderItem={renderComment}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={CommentBootmSheetStyles.commentsContainer}
      />
    </BottomSheetModal>
  );
});

export default CommentsBottomSheet;
