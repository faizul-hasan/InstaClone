import { StyleSheet } from 'react-native';

export const CommentBootmSheetStyles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  handleIndicator: {
    width: 36,
    height: 4,
    backgroundColor: '#BDBDBD',
    borderRadius: 2,
  },

  header: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
  },

  title: {
    color: '#111111',
    fontSize: 18,
    fontWeight: '800',
  },

  commentsContainer: {
    paddingTop: 18,
    paddingBottom: 20,
  },
});
