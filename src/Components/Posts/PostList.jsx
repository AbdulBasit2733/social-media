import React from "react";
import Post from "./Post";
import './Post-List.css';

const PostList = () => {
  return (
    <div className="cards-container">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
