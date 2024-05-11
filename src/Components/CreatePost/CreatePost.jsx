import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  // const handleSubmit = (event) => {};
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your User Id
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          type="text"
          placeholder="Please enter tags using space"
          className="form-control"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })  
    .then((res) => res.json())
    .then((resData) => {
      console.log("Got Response", resData);
    });
  return redirect("/");
};

export default CreatePost;
