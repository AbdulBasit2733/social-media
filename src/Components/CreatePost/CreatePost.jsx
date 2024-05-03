import React, { useContext, useRef } from "react";
import { PostList } from "../../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          placeholder="Enter Your User Id"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          placeholder="Give Title To The Post"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          ref={postBodyElement}
          placeholder="Describe your Post Here"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number Of Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          placeholder="How may people reacted to this post"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          ref={tagsElement}
          type="text"
          placeholder="Please enter tags using space"
          className="form-control"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
