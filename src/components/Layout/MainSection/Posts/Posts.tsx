import { useState } from "react";
import "./Posts.scss";
import PostList from "./PostsList";
import PostForm from "./PostsForm";
import SearchPost from "./SearchPost";
import MainModal from "../../../UI/MainModal/MainModal";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState(false);
  function createPost(newPost: any) {
    setPosts((prev: any): any => [...prev, newPost]);
    setModal(false);
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
      <MainModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost}></PostForm>
      </MainModal>
      <SearchPost
        value={searchInput}
        onChange={setSearchInput}
        setModal={setModal}
      />
      <PostList
        removePost={removePost}
        filteredPosts={filteredPosts}
      ></PostList>
    </div>
  );
}
