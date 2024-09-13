import usePosts from "../hooks/usePosts";
const PostListWQueryHook = () => {
  const { data: posts, error, isLoading } = usePosts();

  return (
    <>
      {isLoading ? <p>Loading......</p> : null}
      {error ? <p>{error.message}:</p> : null}
      {posts?.map((posts) => (
        <>
          <li key={posts.id}>
            {posts.title}
            {posts.body}
          </li>
        </>
      ))}
    </>
  );
};

export default PostListWQueryHook;