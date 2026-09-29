import { StyleSheet } from 'react-native';

export const CommentInputFooterStyles = StyleSheet.create({
  inputContainer: {
    minHeight: 64,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },

  inputAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  input: {
    flex: 1,
    minHeight: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#111111',
    fontSize: 14,
  },

  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 6,
  },

  sendText: {
    color: '#0095F6',
    fontSize: 14,
    fontWeight: '700',
  },
  sendTextDisabled: {
    color: '#B2DFFC',
  },
});
