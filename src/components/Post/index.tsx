import { PostType } from '@/utils/fakePosts';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { IoHeartOutline } from 'react-icons/io5';
import { getInitials } from '@/utils/utils';

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  const fullName = `${post.user.firstName} ${post.user.lastName}`;
  const initials = getInitials(post.user.firstName, post.user.lastName);

  return (
    <div key={post.id} className="flex flex-col items-start gap-4 px-4 py-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={`https://picsum.photos/200?random=user${post.user.id}`}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span>{fullName}</span>
        </div>
        <span>{post.timestamp}</span>
      </div>

      <p>{post.message}</p>

      <Button variant="ghostRed" className="text-md">
        <IoHeartOutline className="mr-2" />
        {post.likes}
      </Button>
    </div>
  );
}
