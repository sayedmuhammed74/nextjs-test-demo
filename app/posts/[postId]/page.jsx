import PostComponent from '@/app/components/post';

const PostPage = async ({ params }) => {
  const { postId } = params;

  return (
    <section>
      <div className="container mx-auto px-5 py-5">
        <h1 className="text-xl font-medium my-3">Post {postId}</h1>
        <PostComponent postId={postId} />
      </div>
    </section>
  );
};

export default PostPage;
