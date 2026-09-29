export interface Comment {
  id: string;
  username: string;
  profileImage: string;
  comment: string;
  likes: string;
  time: string;
}

export const commentData: Comment[] = [
  {
    id: '1',
    username: 'liam_beanz99',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    comment: 'This is amazing 🔥',
    likes: '24',
    time: '2h',
  },

  {
    id: '2',
    username: 'suhana_chandni',
    profileImage: 'https://i.pravatar.cc/150?img=47',
    comment: 'Love this ❤️',
    likes: '12',
    time: '1h',
  },

  {
    id: '3',
    username: 'ezsnipper',
    profileImage: 'https://i.pravatar.cc/150?img=11',
    comment: 'Amazing shot!',
    likes: '8',
    time: '45m',
  },

  {
    id: '4',
    username: 'travel_diaries',
    profileImage: 'https://i.pravatar.cc/150?img=32',
    comment: 'Wow 😍',
    likes: '17',
    time: '30m',
  },

  {
    id: '5',
    username: 'coding_world',
    profileImage: 'https://i.pravatar.cc/150?img=56',
    comment: 'Great post!',
    likes: '5',
    time: '20m',
  },
];
