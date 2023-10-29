import Link from 'next/link';
import PostComponent from '../components/post';

const PostsPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  return (
    <div>
      <section>
        <div className="container mx-auto px-5 py-5">
          <h1 className="text-xl font-medium my-3">Posts</h1>
          {posts.map((post) => (
            <div
              className="mb-3 px-2 py-3 shadow-lg rounded-md bg-gray-100 text-slate-900"
              key={post.id}
            >
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default PostsPage;
