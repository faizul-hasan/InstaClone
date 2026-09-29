import { StyleSheet } from 'react-native';

export const CommentItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  commentRow: {
    flexDirection: 'row',
  },

  textContainer: {
    flex: 1,
  },

  username: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },

  comment: {
    color: '#111111',
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '400',
  },

  heartButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    gap: 16,
  },

  meta: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '500',
  },

  reply: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '600',
  },
});
