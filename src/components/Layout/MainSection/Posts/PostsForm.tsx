import MainButton from "../../../UI/MainButton/MainButton";
import MainInput from "../../../UI/MainInput/Input";
import { useState } from "react";

export default function PostForm({ createPost }: any) {
  const [post, setPost] = useState({ title: "", description: "" });
  function addNewPost(e: any) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost((prev: any) => ({ ...prev, title: "" }));
    setPost((prev: any) => ({ ...prev, description: "" }));
  }
  return (
    <form action="#" className="posts__form">
      <MainInput
        type="text"
        value={post.title}
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
        placeholder="Post name"
      />
      <MainInput
        type="text"
        value={post.description}
        onChange={(e: any) => setPost({ ...post, description: e.target.value })}
        placeholder="Post description"
      />
      <MainButton onClick={addNewPost}>Create post</MainButton>
    </form>
  );
}
