import PostItem from "./PostItem";

export default function PostList({ filteredPosts, removePost }: any) {
  return (
    <div>
      {filteredPosts.length ? (
        <h2 style={{ textAlign: "center" }}>Posts</h2>
      ) : (
        <h2 style={{ textAlign: "center" }}>Posts not found</h2>
      )}

      {filteredPosts.map((post: any, index: number) => (
        <PostItem
          removePost={removePost}
          number={index}
          key={post.id}
          post={post}
        ></PostItem>
      ))}
    </div>
  );
}
