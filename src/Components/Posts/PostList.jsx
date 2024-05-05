import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../../store/post-list-store";
import WelcomeMessage from "../Message/WelcomeMessage";
import LoadingSpinner from "../Loading/LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);
  const [fetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    // console.log("Fetch Stated");
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setIsFetching(false);
        // console.log("Fetch Returned");
      });
      return () => {
        console.log("Cleaning Up useEffect");
        controller.abort();

      }
    // console.log("Fetch Ended");
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}

      {!fetching && (
        <div className="cards-container">
          {postList.length === 0 && <WelcomeMessage />}
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
