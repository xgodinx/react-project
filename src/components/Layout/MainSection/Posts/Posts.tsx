import { useState } from "react";
import "./Posts.scss";
import PostList from "./PostsList";
import PostForm from "./PostsForm";
import SearchPost from "./SearchPost";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function createPost(newPost: any) {
    setPosts((prev: any): any => [...prev, newPost]);
  }

  function removePost(post: any) {
    setPosts((prev: any): any => {
      return prev.filter((p: any) => p.id !== post.id);
    });
  }

  const filteredPosts = posts.filter(
    (p: any) =>
      p.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      p.description.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="posts">
      <PostForm createPost={createPost}></PostForm>
      <SearchPost value={searchInput} onChange={setSearchInput} />
      <PostList
        removePost={removePost}
        filteredPosts={filteredPosts}
      ></PostList>
    </div>
  );
}
