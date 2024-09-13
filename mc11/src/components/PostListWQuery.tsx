import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostListWQuery = () => {
  const fetchPosts = () =>
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      

  const { data: posts,error,isLoading } = useQuery<Posts[],Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  
  return (
    <>
    {isLoading ? <p>Loading......</p> :null}
    {error ? <p>{error.message}:</p> :null}
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

export default PostListWQuery;