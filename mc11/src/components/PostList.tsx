import axios from "axios";
import { useState, useEffect } from "react";

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostList = () => {
  //useState to help us hold state
  const [posts, setPosts] = useState<Posts[]>([]);
  const [error, setError] = useState("");

  //Lets create a fetch data function to help us fetch our data with axios
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {posts.map((posts) => (
        <>
          <li key={posts.id}>{posts.title}</li>
          <li key={posts.id}>{posts.body}</li>
        </>
      ))}
    </>
  );
};

export default PostList;