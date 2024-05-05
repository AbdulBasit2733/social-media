const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <h1>There are no posts</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </>
  );
};
export default WelcomeMessage;
