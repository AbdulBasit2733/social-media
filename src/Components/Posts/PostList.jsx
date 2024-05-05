import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../../store/post-list-store";
import WelcomeMessage from "../Message/WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    // console.log("get Post Clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      <div className="cards-container">
        {postList.length === 0 && (
          <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
        )}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
