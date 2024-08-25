export type PostType = {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
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
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
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
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
];
