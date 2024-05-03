import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../../store/post-list-store";
const Post = ({ post }) => {


  const {deletePost} = useContext(PostList)

  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiFillDelete onClick={() => deletePost(post.id)} />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <a key={tag} href="#" className="badge text-bg-primary hashtag">
            {tag}
          </a>
        ))}
        <div className="alert alert-success reactions" role="alert">
         This Post has been reacted by {post.reactions} peaple!
        </div>
      </div>
    </div>
  );
};

export default Post;
