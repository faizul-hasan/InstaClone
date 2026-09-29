import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CommentInputFooterStyles } from './styles';

interface CommentInputFooterProps {
  avatar: string;
  onPost: (text: string) => void;
}

const CommentInputFooter = React.memo(
  ({ avatar, onPost }: CommentInputFooterProps) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
      const trimmed = text.trim();
      if (!trimmed) return;
      onPost(trimmed);
      setText('');
    };

    return (
      <View style={[CommentInputFooterStyles.inputContainer]}>
        <Image
          source={{ uri: avatar }}
          style={CommentInputFooterStyles.inputAvatar}
        />

        <BottomSheetTextInput
          placeholder="Add a comment..."
          placeholderTextColor="#737373"
          style={CommentInputFooterStyles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={CommentInputFooterStyles.sendButton}
          onPress={handleSubmit}
          disabled={!text.trim()}
        >
          <Text
            style={[
              CommentInputFooterStyles.sendText,
              !text.trim() && CommentInputFooterStyles.sendTextDisabled,
            ]}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
export default CommentInputFooter;
