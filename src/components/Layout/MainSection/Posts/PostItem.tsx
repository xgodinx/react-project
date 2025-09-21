import MainButton from "../../../UI/MainButton/MainButton";

export default function PostItem({ post, number, removePost }: any) {
  return (
    <div className="post">
      <div className="post__item">
        <strong>
          {number + 1}. {post.title ? post.title : "no title"}
        </strong>
        <div>{post.description ? post.description : "no description"}</div>
      </div>
      <MainButton onClick={() => removePost(post)}>Delete</MainButton>
    </div>
  );
}
