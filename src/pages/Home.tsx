import Banner from '@/components/Banner';
import Post from '@/components/Post';
import PostForm from '@/components/PostForm';
import { Separator } from '@/components/ui/separator';
import { posts } from '@/utils/fakePosts';
import { Fragment } from 'react/jsx-runtime';

export default function Home() {
  return (
    <div className={'flex-1 overflow-x-hidden overflow-y-scroll pr-4'}>
      <Banner label="HOME" />

      <PostForm />

      <div className="mt-12 flex flex-col gap-2">
        {posts.map((post) => (
          <Fragment key={post.id}>
            <Separator />
            <Post post={post} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
