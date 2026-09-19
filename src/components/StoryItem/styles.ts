import { StyleSheet } from 'react-native';
const STORY_SIZE = 84;
const RING_SIZE = 4;
export const StoryItemStyles = StyleSheet.create({
  storyContainer: {
    width: 88,
    alignItems: 'center',
  },

  storyRing: {
    width: STORY_SIZE,
    height: STORY_SIZE,
    borderRadius: STORY_SIZE / 2,
    padding: RING_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyImageWrapper: {
    width: STORY_SIZE - RING_SIZE * 2,
    height: STORY_SIZE - RING_SIZE * 2,
    borderRadius: (STORY_SIZE - RING_SIZE * 2) / 2,
    backgroundColor: '#FFFFFF',
    padding: 2,
    overflow: 'hidden',
  },

  yourStoryImageContainer: {
    width: STORY_SIZE,
    height: STORY_SIZE,
    borderRadius: STORY_SIZE / 2,
    position: 'relative',
  },

  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
  },

  addStoryButton: {
    position: 'absolute',
    right: -2,
    bottom: -1,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1C1C1E',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 19,
    marginTop: -1,
  },

  username: {
    marginTop: 7,
    textAlign: 'center',
    color: '#111111',
    fontSize: 14,
    lineHeight: 18,
  },
});
