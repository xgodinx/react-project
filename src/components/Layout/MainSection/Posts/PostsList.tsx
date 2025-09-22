import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";

interface Post {
  id: number | string;
  title: string;
  body: string;
}

interface PostListProps {
  filteredPosts: Post[];
  removePost: (post: Post) => void;
}

export default function PostList({ filteredPosts, removePost }: PostListProps) {
  return (
    <div>
      {filteredPosts.length ? (
        <h2 style={{ textAlign: "center" }}>Posts</h2>
      ) : (
        <h2 style={{ textAlign: "center" }}>Posts not found</h2>
      )}

      <TransitionGroup>
        {filteredPosts.map((post, index) => {
          const nodeRef = useRef<HTMLDivElement>(null);

          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="item"
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                <PostItem removePost={removePost} number={index} post={post} />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
