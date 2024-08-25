export type PostType = {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  message: string;
  timestamp: Date;
  likes: number;
};

export const posts: PostType[] = [
  {
    id: '1',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world! 23123123 1231 231',
    timestamp: new Date('2024-08-25T22:52:00'),
    likes: 10,
  },
  {
    id: '2',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-08-25T10:52:00'),
    likes: 10,
  },
  {
    id: '3',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-08-23T10:00:00'),
    likes: 10,
  },
  {
    id: '4',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-08-20T10:00:00'),
    likes: 10,
  },
  {
    id: '5',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-07-20T10:00:00'),
    likes: 10,
  },
  {
    id: '6',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-04-20T10:00:00'),
    likes: 10,
  },
  {
    id: '7',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-02-20T10:00:00'),
    likes: 10,
  },
  {
    id: '8',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-01-20T10:00:00'),
    likes: 10,
  },
  {
    id: '9',
    user: {
      id: '1',
      firstName: 'Simon',
      lastName: 'Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: new Date('2024-01-20T10:00:00'),
    likes: 10,
  },
];
