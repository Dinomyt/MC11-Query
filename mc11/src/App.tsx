import PostList from "./components/PostList"
import PostListWQuery from "./components/PostListWQuery"
import PostListWQueryHook from "./components/PostListWQueryHook"

const App = () => {
  return (
    <>
      <h1>Posts</h1>
      {/* <PostList/> */}
      {/* <PostListWQuery/> */}
      <PostListWQueryHook/>
    </>
  )
}

export default App