const PostComponent = async ({ postId }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const post = await response.json();
  return (
    <div
      className="mb-3 px-2 py-3 shadow-lg rounded-md bg-gray-100 text-slate-900"
      key={post.id}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostComponent;
