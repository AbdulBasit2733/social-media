import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../../store/post-list-store";
import WelcomeMessage from "../Message/WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      <div className="cards-container">
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
