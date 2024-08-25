import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { IoHeartOutline } from 'react-icons/io5';

type Message = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
  likes: number;
};

const messages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '2',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '3',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '4',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '5',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '6',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '7',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user1',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '8',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user2',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
  {
    id: '9',
    user: {
      name: 'Simon Cardona',
      avatar: 'https://picsum.photos/200?random=user3',
    },
    message: 'Hello world!',
    timestamp: '2021-09-01T10:00:00',
    likes: 10,
  },
];

export default function Home() {
  return (
    <div className={'flex-1 overflow-x-hidden overflow-y-scroll pr-4'}>
      <div className="flex h-36 items-center justify-center">
        <Separator className="w-60 bg-black" />
        <span className="px-4 text-2xl font-bold">HOME</span>
        <Separator className="w-60 bg-black" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://picsum.photos/200?random=user1" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="What's on your mind?"
            className="resize-none"
          />
        </div>
        <div className="flex items-center justify-end gap-4 pr-4">
          <span>100</span>
          <Button variant="default">Post message</Button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2">
        {messages.map((message) => (
          <>
            <Separator />
            <div
              key={message.id}
              className="flex flex-col items-start gap-4 px-4 py-2"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={`https://picsum.photos/200?random=user${message.id}`}
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <span>{message.user.name}</span>
                </div>
                <span>{message.timestamp}</span>
              </div>

              <p>{message.message}</p>

              <Button variant="ghostRed" className="text-md">
                <IoHeartOutline className="mr-2" />
                {message.likes}
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
